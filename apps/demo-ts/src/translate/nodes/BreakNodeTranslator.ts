import { NodeTranslator } from './NodeTranslator'
import { NodeTranslatorConfig } from './NodeTranslatorConfig'

export class BreakNodeTranslator extends NodeTranslator {
  // node: BreakNodeSchema
  config: NodeTranslatorConfig = {
    genNodeVariable: false,
  }

  translateBody() {
    const { jsBuffer } = this

    jsBuffer.pushLine(`break`)
  }
}
