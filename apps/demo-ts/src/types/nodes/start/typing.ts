import { type FlowNodeSchema, type FlowNodeDefinitionSchema } from '@flow-ide-editor/schema'
// ts 定义
export type StartNodeDefinitionSchema = Omit<FlowNodeDefinitionSchema, 'inputs' | 'localVariables'>

export interface StartNodeSchema extends FlowNodeSchema<StartNodeDefinitionSchema> {
  type: 'start'
}
