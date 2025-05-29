import { type FlowNodeSchema, type FlowNodeDefinitionSchema } from '@flow-ide-editor/schema'
// ts 定义

export interface TemplateStringUtilityDefinitionSchema extends FlowNodeDefinitionSchema {
  // required
  script: {
    language: 'python'
    content: string
  }
}

export interface TemplateStringUtilitySchema extends FlowNodeSchema<FlowNodeDefinitionSchema> {
  type: 'template-string'
}
