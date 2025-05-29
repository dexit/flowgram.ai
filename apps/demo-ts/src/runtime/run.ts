import _ from 'lodash'
import { translateFlow } from '../translate'
import { EndNodeSchema, FlowArgs, FlowSchema, ScriptNodeSchema, StartNodeSchema } from '../types'
import { error } from '../util/log'
import { RuntimeError } from './RuntimeError'
import JSON5 from 'json5'

export type Result = {
  error: RuntimeError
  [k: string]: unknown
}

export async function runFlowJs(moduleJs: string, args: FlowArgs = {}): Promise<Result> {
  // log(`[${Runtime.runjs.name}]`, js)
  let result = {}
  let err = new RuntimeError()
  try {
    const argsLiteral = JSON5.stringify(args)
    const demoduledJs = moduleJs
      .replace('export async function', 'async function')
      .replace('export function', 'function')
    const runnableJs = `${demoduledJs}\nreturn await __main(${argsLiteral})`
    result = await runPlainJS(runnableJs)
  } catch (e) {
    err = new RuntimeError(RuntimeError.CODE.FAIL, e.message)
    error(`[${runFlowJs.name}]`, e.message)
  }

  return {
    error: err,
    ...result,
  }
}

export async function runFlowSchema(schema: FlowSchema, args: FlowArgs = {}): Promise<Result> {
  const js = translateFlow(schema)
  // log('runFlowSchema', js)
  return runFlowJs(js, args)
}

/**
 * solution: generate a flow, add start, end node
 */
export async function runScriptNodeSchema(
  scriptSchema: ScriptNodeSchema,
  args: FlowArgs = {}
): Promise<Result> {
  const scriptId = scriptSchema.definition!.info!.title!

  const startSchema: StartNodeSchema = {
    id: 'start',
    type: 'start',
    definition: {
      info: { title: 'start' },
      outputs: _.cloneDeep(scriptSchema.definition!.inputs!),
      script: { language: 'python', content: '' },
    },
    data: {},
  }

  const scriptData = {}
  Object.entries(scriptSchema.definition!.inputs!.properties!).forEach(([key]) => {
    scriptData[key] = { type: 'expression', content: `start.outputs.${key}` }
  })
  scriptSchema.data = scriptData

  const endData = {}
  Object.entries(scriptSchema.definition!.outputs!.properties!).forEach(([key]) => {
    endData[key] = { type: 'expression', content: `${scriptId}.outputs.${key}` }
  })
  const endSchema: EndNodeSchema = {
    id: 'end',
    type: 'end',
    definition: {
      info: { title: 'end' },
      inputs: _.cloneDeep(scriptSchema.definition!.outputs!),
      script: { language: 'python', content: '' },
    },
    data: endData,
  }

  const schema: FlowSchema = {
    id: '0',
    nodes: [startSchema, scriptSchema, endSchema],
  }
  // log('runScriptNodeSchema', schema)
  return runFlowSchema(schema, args)
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function
 */
export async function runPlainJS(js: string): Promise<Result> {
  const AsyncFunction = Object.getPrototypeOf(
    /* istanbul ignore next */
    async function () {}
  ).constructor
  const asyncFn = new AsyncFunction(`'use strict'\n${js}`)
  return await asyncFn()
}
