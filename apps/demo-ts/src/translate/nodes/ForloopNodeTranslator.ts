import { JSBuffer } from '../../util'
import { NodeTranslator } from './NodeTranslator'

export class ForloopNodeTranslator extends NodeTranslator {
  // node: ForloopNodeSchema

  translateBody() {
    const { node, nodeId, jsBuffer, context } = this

    const setVariables = node.data!.initializer
    const jsbInitializer = new JSBuffer()
    Object.entries(setVariables).forEach(([leftLiteral, rightValue]) => {
      const rightLiteral = this.getLiteral(rightValue)
      jsbInitializer.push(`${nodeId}.localVariables.${leftLiteral} = ${rightLiteral}`)
    })
    const initializer = jsbInitializer.toJs(',')
    const condition = this.getLiteral(node.data?.condition)
    const step = this.getLiteral(node.data?.step)

    jsBuffer.pushLine(`for (${initializer}; ${condition}; ${step}) {`)
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
