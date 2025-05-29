import { FlowConditionNodeSchema } from '../../types'
import { NodeTranslator } from './NodeTranslator'

export class ConditionNodeTranslator extends NodeTranslator {
  node: FlowConditionNodeSchema

  translateBody() {
    const { node, jsBuffer, context } = this
    // TODO validate
    jsBuffer.push(NodeTranslator.translateNodes(node.blocks!, { ...context, parent: this }))
  }
}
