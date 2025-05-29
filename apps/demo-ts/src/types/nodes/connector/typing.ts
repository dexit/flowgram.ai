import type {
  FlowNodeDefinitionSchema,
  FlowNodeSchema,
  FlowTypeSchema,
  FlowValueSchema,
} from '@flow-ide-editor/schema'

export interface ConnectorNodeDefinitionSchema extends FlowNodeDefinitionSchema {
  outputs: {
    type: 'object'
    properties: {
      /**
       * 固定 literal 字段，不允许为变量，且表单隐藏
       */
      connectorId: FlowTypeSchema<'string'> & { flow: { hidden: true } }
      actionId: FlowTypeSchema<'string'> & { flow: { hidden: true } }
      projectId: FlowTypeSchema<'string'> & { flow: { hidden: true } }
      teamId: FlowTypeSchema<'string'> & { flow: { hidden: true } }
      /**
       * 固定字段
       */
      retryInterval: FlowTypeSchema<'integer'>
      retryTimes: FlowTypeSchema<'integer'>
      timeout: FlowTypeSchema<'integer'>
    } & Record<string, FlowTypeSchema> // 不同连接器的自定义字段
  }
}

export interface ConnectorNodeSchema extends FlowNodeSchema<ConnectorNodeDefinitionSchema> {
  type: 'connector'
  data: {
    connectorId: string
    actionId: string
    projectId: string
    teamId: string
    retryInterval: FlowValueSchema
    retryTimes: FlowValueSchema
    timeout: FlowValueSchema
  } & Record<string, FlowValueSchema>
}
