import type { FlowNodeSchema } from '@flow-ide-editor/schema'

export interface BlockNodeSchema extends Omit<FlowNodeSchema, 'definition' | 'data'> {
  type: 'block'
}
