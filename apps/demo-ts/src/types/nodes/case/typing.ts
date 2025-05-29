import type { FlowNodeSchema } from '@flow-ide-editor/schema'

export interface CaseNodeSchema extends Omit<FlowNodeSchema, 'definition'> {
  type: 'case'
}
