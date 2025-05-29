import type {
  FlowNodeDefinitionSchema,
  FlowNodeSchema,
  FlowTypeSchema,
  FlowValueSchema,
} from '@flow-ide-editor/schema'

export interface LLMNodeDefinitionSchema extends FlowNodeDefinitionSchema {
  inputs: {
    type: 'object'
    properties: {
      modelType: FlowTypeSchema<'integer'>
      prompt: FlowTypeSchema<'string'>
      temperature: FlowTypeSchema<'number'>
    }
  }
  outputs: FlowTypeSchema<'string'>
}

export interface LLMNodeSchema extends FlowNodeSchema<LLMNodeDefinitionSchema> {
  type: 'llm'
  data: {
    modelType: FlowValueSchema
    prompt: FlowValueSchema
    temperature: FlowValueSchema
  }
}
