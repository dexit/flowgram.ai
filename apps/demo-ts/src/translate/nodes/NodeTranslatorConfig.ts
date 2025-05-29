export type NodeTranslatorConfig = {
  genNodeVariable:
    | false
    | {
        inputs?: boolean
        outputs?: boolean
        data?: boolean
        localVariables?: boolean
      }
}
