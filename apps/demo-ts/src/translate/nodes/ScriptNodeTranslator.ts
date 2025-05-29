import { ScriptNodeSchema } from '../../types'
import { NodeTranslator } from './NodeTranslator'

export class ScriptNodeTranslator extends NodeTranslator {
  node: ScriptNodeSchema

  translateBody() {
    const { node, nodeId, jsBuffer } = this

    const script = node.definition!.script!.content
    const func = `__func_${nodeId}`
    this.translateObjectInData(`${nodeId}.data`, node.data!) // TODO validate
    jsBuffer.pushLine(`const ${func} = (inputs, outputs) => {`)
    jsBuffer.pushLine(`${script}`)
    jsBuffer.pushLine(`}`)
    jsBuffer.pushLine(`${func}(${nodeId}.data, ${nodeId}.outputs)`)
  }
}
