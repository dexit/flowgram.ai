import { DefaultNodeSchema } from '../../types'
import { NodeTranslator } from './NodeTranslator'
import { NodeTranslatorConfig } from './NodeTranslatorConfig'

export class DefaultNodeTranslator extends NodeTranslator {
  node: DefaultNodeSchema
  config: NodeTranslatorConfig = {
    genNodeVariable: false,
  }

  translateBody() {
    const { node, jsBuffer, context } = this
    jsBuffer.pushLine(`else {`)
    jsBuffer.push(
      // TODO validate
      NodeTranslator.translateNodes(node.blocks!, {
        level: context.level + 1,
        blockIndex: context.blockIndex,
        parent: this,
      })
    )
    jsBuffer.pushLine(`} // ${this.nodeInfo}`)
  }
}
