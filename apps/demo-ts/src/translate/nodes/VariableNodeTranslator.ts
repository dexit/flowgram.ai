import { VariableNodeSchema } from '../../types'
import { NodeTranslator } from './NodeTranslator'

export class VariableNodeTranslator extends NodeTranslator {
  node: VariableNodeSchema

  translateBody() {
    const { node, nodeId, jsBuffer } = this

    const setVariables = node.data!.setVariables
    Object.entries(setVariables).forEach(([, setVariable]) => {
      // TODO xpath
      const left = setVariable.left.content.replace('@.', `${nodeId}.outputs.`).replace('$.', ``)
      // TODO support empty fx, how to get default right value
      const right = this.getLiteral(setVariable.right)
      jsBuffer.pushLine(`${left} = ${right}`)
    })
  }
}
