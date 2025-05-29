import { FlowSchema } from '@flow-ide-editor/schema'
import { readFileSync, writeFileSync } from 'fs'
import JSON5 from 'json5'
import path from 'path'
import fs from 'fs'
import * as prettier from 'prettier'
import { FlowArgs, runFlowJs, translateFlow } from '../../src'

export type FlowCase = { name: string; schema: FlowSchema; args: FlowArgs }
export type FlowConfig = { name: string; args: FlowArgs }
export type FlowName = string

export function runCases(flows: (FlowName | FlowConfig)[], dir: string) {
  const cases: FlowCase[] = flows.map((flow) => {
    const flowName = typeof flow === 'string' ? flow : flow.name
    return {
      name: flowName,
      schema: loadSchemaFrom(flowName, dir),
      args: typeof flow === 'string' ? {} : flow.args,
    }
  })

  describe('flow', () => {
    cases.forEach(({ name, schema, args }) => {
      const caseName = `${name} | ${JSON5.stringify(args)}`
      it(caseName, async () => {
        const js = translateFlow(schema)
        const formattedJs = await prettier.format(js, prettierConfig)
        await saveJsArchive(formattedJs, name, dir)
        expect(formattedJs).toMatchSnapshot()
        expect(await runFlowJs(formattedJs, args)).toMatchSnapshot()
      })
    })
  })
}

function loadSchemaFrom(flowName: string, dir: string): FlowSchema {
  const content = readFileSync(path.resolve(dir, `./${flowName}.json`)).toString()
  return JSON5.parse(content).value as unknown as FlowSchema
}

function saveJsArchive(js: string, flowName: string, dir: string) {
  writeFileSync(path.resolve(dir, `./${flowName}.flow.js`), js)
}

const _prettierConfig = JSON5.parse(
  fs.readFileSync(path.resolve(__dirname, '../../.prettierrc')).toString()
)
export const prettierConfig: prettier.Options = Object.assign({ parser: 'babel' }, _prettierConfig)
