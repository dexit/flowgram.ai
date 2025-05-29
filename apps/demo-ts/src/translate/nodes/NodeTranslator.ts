import JSON5 from 'json5'
import {
  BasicType,
  FlowNodeDataSchema,
  FlowNodeSchema,
  FlowValueSchema,
  TypeSchema,
} from '@flow-ide-editor/schema'
import _ from 'lodash'
import {
  BatchNodeTranslator,
  BlockNodeTranslator,
  BreakNodeTranslator,
  CallflowNodeTranslator,
  CaseNodeTranslator,
  ConditionNodeTranslator,
  DefaultNodeTranslator,
  EndNodeTranslator,
  ForloopNodeTranslator,
  ParallelNodeTranslator,
  ScriptNodeTranslator,
  StartNodeTranslator,
  TranslatorContext,
  VariableNodeTranslator,
  getDefaultContext,
} from '.'
import { JSBuffer } from '../../util'
import { validateOrThrow } from '../../validate'
import { InvalidNodeTypeError, InvalidTypeError, NotImplementedError } from '../../types'
import { NodeTranslatorConfig } from './NodeTranslatorConfig'

export class NodeTranslator {
  static readonly SPACE = ' '
  static readonly TAB = NodeTranslator.SPACE.repeat(2)

  nodeId!: string
  jsBuffer!: JSBuffer
  config: NodeTranslatorConfig = {
    genNodeVariable: {
      outputs: true,
    },
  }

  static create(
    node: FlowNodeSchema,
    context: TranslatorContext = getDefaultContext()
  ): NodeTranslator {
    switch (node.type) {
      case 'start':
        return new StartNodeTranslator(node, context)
      case 'end':
        return new EndNodeTranslator(node, context)
      case 'variable':
        return new VariableNodeTranslator(node, context)
      case 'condition':
        return new ConditionNodeTranslator(node, context)
      case 'case':
        return new CaseNodeTranslator(node, context)
      case 'default':
        return new DefaultNodeTranslator(node, context)
      case 'forloop':
        return new ForloopNodeTranslator(node, context)
      case 'break':
        return new BreakNodeTranslator(node, context)
      case 'batch':
        return new BatchNodeTranslator(node, context)
      case 'parallel':
        return new ParallelNodeTranslator(node, context)
      case 'block':
        return new BlockNodeTranslator(node, context)
      case 'script':
        return new ScriptNodeTranslator(node, context)
      case 'callflow':
        return new CallflowNodeTranslator(node, context)
      default:
        throw new InvalidNodeTypeError(`"${node.type}" is invalid node type`)
    }
  }

  static translateNodes(
    nodes: FlowNodeSchema[],
    context: TranslatorContext = getDefaultContext()
  ): string {
    const jsBuffer = new JSBuffer()
    nodes.forEach((node, blockIndex) => {
      jsBuffer.push(NodeTranslator.translateNode(node, { ...context, blockIndex }))
    })
    return jsBuffer.toJs()
  }

  static translateNode(
    node: FlowNodeSchema,
    context: TranslatorContext = getDefaultContext()
  ): string {
    return NodeTranslator.create(node, context).toJs()
  }

  constructor(
    public node: FlowNodeSchema,
    public context: TranslatorContext = getDefaultContext()
  ) {
    validateOrThrow(node)

    this.nodeId = node.definition!.info!.title!
    const indent =
      this.context.level > (this.context.parent?.context.level ?? 0) ? NodeTranslator.TAB : ''
    this.jsBuffer = new JSBuffer(indent)
  }

  private translate() {
    this.jsBuffer.clear()
    this.translateHeader()
    this.translateBody()
  }

  protected translateHeader() {
    const { node, nodeId, jsBuffer, config } = this
    jsBuffer.pushLine(`//=== ${this.nodeInfo} | ${this.debugInfo}`)

    if (config.genNodeVariable) {
      jsBuffer.pushLine(`const ${nodeId} = {}`)

      if (config.genNodeVariable.outputs) {
        const outputs = node.definition?.outputs?.properties ?? {}
        this.translateObjectInDefinition(`${nodeId}.outputs`, outputs)
      }

      const localVariables = node.definition?.localVariables?.properties
      if (localVariables) {
        this.translateObjectInDefinition(`${nodeId}.localVariables`, localVariables)
      }
    }
  }

  protected translateBody() {
    throw new NotImplementedError()
  }

  protected translateObjectInDefinition(varName: string, obj: object) {
    const { jsBuffer } = this

    jsBuffer.push(`${varName} = `)
    this._translateObjectInDefinition(obj)
  }

  private _translateObjectInDefinition(obj: object, level = 0) {
    const { jsBuffer } = this
    const indent0 = NodeTranslator.TAB.repeat(level)
    const indent1 = NodeTranslator.TAB.repeat(level + 1)
    const tail = level > 0 ? ',' : ''
    const props = Object.entries(obj)

    if (props.length === 0) {
      jsBuffer.pushLine(`{}${tail}`)
    } else {
      jsBuffer.pushLine(`{`)
      props.forEach(([k, prop]) => {
        if (['object'].includes(prop.type)) {
          jsBuffer.push(`${indent1}${k}: `)
          this._translateObjectInDefinition(prop.properties ?? {}, level + 1)
        } else {
          jsBuffer.pushLine(`${indent1}${k}: ${this.getDefaultLiteral(prop)},`)
        }
      })
      jsBuffer.pushLine(`${indent0}}${tail}`)
    }
  }

  protected translateObjectInData(varName: string, obj: object) {
    const { jsBuffer } = this

    jsBuffer.pushLine(`${varName} = {`)
    Object.entries(obj).forEach(([k, prop]) => {
      jsBuffer.pushLine(`${NodeTranslator.TAB}${k}: ${this.getLiteral(prop)},`)
    })
    jsBuffer.pushLine(`}`)
  }

  toJs() {
    this.translate()
    return this.jsBuffer.toJs()
  }

  get nodeInfo() {
    return `${this.nodeId}@${this.node.type}`
  }

  get debugInfo() {
    return `${JSON5.stringify({ ...this.context, parent: this.context.parent?.nodeId })}`
  }

  getDefaultLiteral(type: TypeSchema<BasicType>): string {
    if (type.default !== undefined) {
      // TODO isFlowValueSchema()
      if (_.isObject(type.default)) return this.getLiteral(type.default as FlowValueSchema)
      else return JSON5.stringify(type.default)
    }

    switch (type.type) {
      case 'string':
        return "''"
      case 'number':
        return '0'
      case 'integer':
        return '0'
      case 'boolean':
        return 'false'
      case 'array':
        return '[]'
      // case 'object':
      case 'map':
        return '{}'

      default:
        throw new InvalidTypeError(`${type.type} is invalid type`)
    }
  }

  getLiteral(data?: FlowNodeDataSchema | FlowValueSchema): string {
    if (!data) return ''
    // TODO nested structure？ FlowNodeDataSchema

    // Just support FlowValueSchema
    if (typeof data === 'object') {
      switch (data.type) {
        case 'expression':
          return String(data.content)
        // case 'ref':
        //   return prop.content
        // case 'refPath':
        //   return prop.content
        // case 'template':
        //   return prop.content
        default:
          return String(data.content)
      }
    } else {
      return JSON5.stringify(data)
    }
  }
}
