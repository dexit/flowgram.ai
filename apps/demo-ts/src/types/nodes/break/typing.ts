import type { FlowNodeSchema } from '@flow-ide-editor/schema'

export interface BreakNodeSchema extends Omit<FlowNodeSchema, 'definition' | 'data'> {
  type: 'break'
}
