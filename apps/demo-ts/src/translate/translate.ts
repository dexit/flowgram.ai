import { FlowSchema } from '@flow-ide-editor/schema'
import { NodeTranslator } from './nodes'
import { JSBuffer } from '../util'

export function translateFlow(schema: FlowSchema): string {
  const jsBuffer = new JSBuffer()
  jsBuffer.pushLine(`export async function __main(__args) {`)
  jsBuffer.push(translateNodes(schema.nodes))
  jsBuffer.pushLine(`}`)

  return jsBuffer.toJs()
}

export const translateNodes = NodeTranslator.translateNodes

export const translateNode = NodeTranslator.translateNode
