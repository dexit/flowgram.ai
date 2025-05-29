import type { FlowNodeDefinitionSchema, FlowNodeSchema } from '@flow-ide-editor/schema'

export interface ScriptNodeDefinitionSchema extends FlowNodeDefinitionSchema {
  // required
  script: {
    language: 'python'
    content: string
  }
}

export interface ScriptNodeSchema extends FlowNodeSchema<ScriptNodeDefinitionSchema> {
  type: 'script'
}
