import type { FlowNodeDefinitionSchema, FlowNodeSchema } from '@flow-ide-editor/schema'

export type EndNodeDefinitionSchema = Omit<FlowNodeDefinitionSchema, 'outputs' | 'localVariables'>

export interface EndNodeSchema extends FlowNodeSchema<EndNodeDefinitionSchema> {
  type: 'end'
}
