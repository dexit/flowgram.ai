import type {
  FlowNodeDefinitionSchema,
  FlowNodeSchema,
  FlowConditionValue,
  FlowNodeDefinitionEmpty,
} from '@flow-ide-editor/schema'

// ts 定义
export interface FlowConditionCaseSchema extends FlowNodeSchema<FlowNodeDefinitionEmpty> {
  type: 'case'
  data: {
    condition: FlowConditionValue
  }
}

export interface FlowConditionDefaultSchema
  extends Omit<FlowNodeSchema<FlowNodeDefinitionEmpty>, 'data'> {
  type: 'default'
}
/**
 * 1. condition 无 inputs
 */
export interface FlowConditionNodeSchema
  extends FlowNodeSchema<Omit<FlowNodeDefinitionSchema, 'inputs'>> {
  type: 'condition'
  blocks: (FlowConditionCaseSchema | FlowConditionDefaultSchema)[]
}
