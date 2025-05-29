import { NodeTranslator } from './NodeTranslator'

export type TranslatorContext = {
  level: number
  blockIndex: number
  parent: NodeTranslator | null
}

export function getDefaultContext(): TranslatorContext {
  // level:1
  return { level: 1, blockIndex: 0, parent: null }
}
