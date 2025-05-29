import { StartNodeSchema } from '../../types'
import { NodeTranslator } from './NodeTranslator'

export class StartNodeTranslator extends NodeTranslator {
  node: StartNodeSchema

  translateBody() {
    const { nodeId, jsBuffer } = this

    jsBuffer.pushLine(`Object.assign(${nodeId}.outputs, __args)`)
  }
}
