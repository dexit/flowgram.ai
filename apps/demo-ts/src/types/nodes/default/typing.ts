import type { FlowNodeSchema } from '@flow-ide-editor/schema'

export interface DefaultNodeSchema extends Omit<FlowNodeSchema, 'definition' | 'data'> {
  type: 'default'
}
