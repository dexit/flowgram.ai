export * from '@flow-ide-editor/schema'
export * from './nodes'

export class InvalidSchemaError extends Error {}
export class InvalidNodeTypeError extends Error {}
export class InvalidTypeError extends Error {}
export class NotImplementedError extends Error {}

export type FlowArgs = Record<string, unknown>
