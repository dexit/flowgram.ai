import type {
  FlowNodeDefinitionSchema,
  FlowNodeSchema,
  FlowTypeSchema,
  FlowValueSchema,
  FlowConditionValue,
} from '@flow-ide-editor/schema'

export interface LoopNodeDefinitionSchema extends FlowNodeDefinitionSchema {
  inputs: {
    type: 'object'
    properties: {
      loopMode: {
        type: 'string'
        enum: ['list', 'condition']
      }
      list: FlowTypeSchema<'array'>
      concurrency: FlowTypeSchema<'number'>
      condition: FlowTypeSchema<'object'>
      maxLoop: FlowTypeSchema<'number'>
    }
  }
  localVariables: {
    type: 'object'
    properties: {
      item: FlowTypeSchema<'object'>
      index: FlowTypeSchema<'number'>
    }
  }
}

export interface LoopNodeSchema extends FlowNodeSchema {
  type: 'loop'
  data: {
    loopMode: 'list' | 'condition'
    list: FlowValueSchema
    concurrency: number
    condition: FlowConditionValue
    maxLoop: number
  }
}
