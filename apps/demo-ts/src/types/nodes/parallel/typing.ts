import type { FlowNodeSchema, FlowNodeDefinitionEmpty } from '@flow-ide-editor/schema'

export interface ParallelNodeSchema extends FlowNodeSchema {
  blocks: FlowNodeSchema<FlowNodeDefinitionEmpty>[]
}
