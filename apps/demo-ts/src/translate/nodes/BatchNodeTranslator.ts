import { NodeTranslator } from './NodeTranslator'

export class BatchNodeTranslator extends NodeTranslator {
  // node: BatchNodeSchema

  translateBody() {
    const { node, nodeId, jsBuffer, context } = this
    const array = this.getLiteral(node.data?.list)
    const concurrency = this.getLiteral(node.data?.concurrency)

    // TODO concurrency > 1
    jsBuffer.pushLine(`// concurrency: ${concurrency}`)
    jsBuffer.pushLine(`${nodeId}.__array = ${array}`)
    jsBuffer.pushLine(`${nodeId}.__array.forEach((__item, __index) => {`)
    jsBuffer.pushLine(`${nodeId}.localVariables.item = __item`)
    jsBuffer.pushLine(`${nodeId}.localVariables.index = __index`)
    jsBuffer.push(
      // TODO validate
      NodeTranslator.translateNodes(node.blocks!, {
        level: context.level + 1,
        blockIndex: context.blockIndex,
        parent: this,
      })
    )
    jsBuffer.pushLine(`}) // ${this.nodeInfo}`)
  }
}
