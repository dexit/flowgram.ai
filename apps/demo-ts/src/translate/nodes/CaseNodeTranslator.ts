import { CaseNodeSchema } from '../../types'
import { NodeTranslator } from './NodeTranslator'
import { NodeTranslatorConfig } from './NodeTranslatorConfig'

export class CaseNodeTranslator extends NodeTranslator {
  node: CaseNodeSchema
  config: NodeTranslatorConfig = {
    genNodeVariable: false,
  }

  translateBody() {
    const { node, jsBuffer, context } = this
    const controlFlow = context.blockIndex === 0 ? `if` : `else if`

    jsBuffer.pushLine(`${controlFlow} (${this.getLiteral(node.data?.condition)}) {`)
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
