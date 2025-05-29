import { BlockNodeSchema } from '../../types'
import { NodeTranslator } from './NodeTranslator'

export class BlockNodeTranslator extends NodeTranslator {
  node: BlockNodeSchema

  translateBody() {
    const { node, nodeId, jsBuffer, context } = this
    const parallelNodeId = context.parent!.nodeId

    jsBuffer.push(
      // TODO validate
      NodeTranslator.translateNodes(node.blocks!, {
        level: context.level + 1,
        blockIndex: context.blockIndex,
        parent: this,
      })
    )

    if (node.blocks?.length) {
      const lastNode = node.blocks[node.blocks.length - 1]
      const lastNodeId = lastNode.definition!.info!.title
      jsBuffer.pushLine(`${nodeId}.outputs = ${lastNodeId}.outputs`)
    }
    jsBuffer.pushLine(`${parallelNodeId}.outputs.${nodeId} = ${nodeId}`)
  }
}
