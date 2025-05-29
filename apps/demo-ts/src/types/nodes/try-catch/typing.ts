import {
  type FlowNodeSchema,
  type FlowNodeDefinitionSchema,
  type FlowNodeDefinitionEmpty,
  type FlowConditionValue,
} from '@flow-ide-editor/schema'

// ts 定义
export interface FlowTryNodeSchema extends FlowNodeSchema<FlowNodeDefinitionEmpty> {
  type: 'try'
  data: {
    condition: FlowConditionValue
  }
}
export interface FlowCatchNodeSchema extends Omit<FlowNodeSchema<FlowNodeDefinitionEmpty>, 'data'> {
  type: 'catch'
}

export interface TryCatchNodeSchema
  extends FlowNodeSchema<Omit<FlowNodeDefinitionSchema, 'inputs'>> {
  type: 'tryCatch'
  blocks: (FlowTryNodeSchema | FlowCatchNodeSchema)[]
}
