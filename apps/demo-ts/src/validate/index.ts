import { FlowNodeSchema } from '@flow-ide-editor/schema'
import { InvalidSchemaError } from '../types'

// TODO use json-schema validation
export function validateOrThrow(node: FlowNodeSchema): void {
  if (!node.definition) throw new InvalidSchemaError()
  if (!node.definition.info) throw new InvalidSchemaError()
  if (!node.definition.info.title) throw new InvalidSchemaError()
}
