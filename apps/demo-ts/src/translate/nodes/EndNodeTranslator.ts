import { EndNodeSchema } from '../../types'
import { NodeTranslator } from './NodeTranslator'
import { NodeTranslatorConfig } from './NodeTranslatorConfig'

export class EndNodeTranslator extends NodeTranslator {
  node: EndNodeSchema
  config: NodeTranslatorConfig = {
    genNodeVariable: {
      outputs: false,
    },
  }

  translateBody() {
    const { node, nodeId, jsBuffer } = this

    // TODO validate
    this.translateObjectInData(`${nodeId}.data`, node.data!)
    jsBuffer.pushLine(`return ${nodeId}.data`)
  }
}
