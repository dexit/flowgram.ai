import type { FlowNodeDefinitionSchema, FlowNodeSchema } from '@flow-ide-editor/schema'

export type VariableNodeDefinitionSchema = Omit<FlowNodeDefinitionSchema, 'inputs'>

export interface VariableNodeSchema extends FlowNodeSchema<VariableNodeDefinitionSchema> {
  type: 'variable'
}
