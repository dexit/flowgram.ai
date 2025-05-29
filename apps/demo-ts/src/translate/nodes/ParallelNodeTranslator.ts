import { ParallelNodeSchema } from '../../types'
import { NodeTranslator } from './NodeTranslator'

export class ParallelNodeTranslator extends NodeTranslator {
  node: ParallelNodeSchema

  translateBody() {
    const { node, nodeInfo, jsBuffer, context } = this

    jsBuffer.pushLine(`await Promise.all([`)
    node.blocks!.forEach((block, blockIndex) => {
      jsBuffer.pushLine(`new Promise(async (__resolve, __reject) => {`)

      jsBuffer.push(
        NodeTranslator.translateNode(block, {
          level: context.level + 1,
          blockIndex,
          parent: this,
        })
      )

      jsBuffer.pushLine(`__resolve()`)
      jsBuffer.pushLine(`}), // ${block.definition?.info?.title}@${block.type}`)
    })
    jsBuffer.pushLine(`]) // ${nodeInfo}`)
  }
}
