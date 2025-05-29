import { NodeTranslator } from './NodeTranslator'
import path from 'path'

export class CallflowNodeTranslator extends NodeTranslator {
  translateBody() {
    const { node, nodeId, jsBuffer } = this

    // TODO tmp solution
    const flowPath = path.resolve(
      __dirname,
      '../../../test/flow/',
      node.definition!.systemInputs!.properties!.resourceUri.default!
    )
    this.translateObjectInData(`${nodeId}.data`, node.data!)
    jsBuffer.pushLine(
      `${nodeId}.outputs = await (await import('${flowPath}'))?.__main(${nodeId}.data)`
    )
  }
}
