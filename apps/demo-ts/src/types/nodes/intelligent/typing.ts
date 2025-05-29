import type {
  FlowNodeDefinitionSchema,
  FlowNodeSchema,
  FlowTypeSchema,
} from '@flow-ide-editor/schema'

export interface IntelligentNodeDefinitionSchema extends FlowNodeDefinitionSchema {
  inputs: {
    type: 'object'
    properties: {
      instruction: FlowTypeSchema<'string'>
    }
    required: string[]
  }
}

export interface IntelligentNodeSchema extends FlowNodeSchema<IntelligentNodeDefinitionSchema> {
  type: 'intelligent'
}
