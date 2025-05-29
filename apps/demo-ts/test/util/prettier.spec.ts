import * as prettier from 'prettier'
import { prettierConfig } from '../flow/util'

describe('prettier', () => {
  it('basic', async () => {
    expect(await prettier.format('foo ( );', prettierConfig)).toMatchSnapshot()
    expect(
      await prettier.format('function foo (a , b=1 ){ f( a)}', prettierConfig)
    ).toMatchSnapshot()
  })

  it('module', async () => {
    expect(
      await prettier.format(
        `
export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {
    query: 'hi',
  }
  Object.assign(start.outputs, __args)
    //=== variable@variable | {level:1,blockIndex:1}
  const variable = {}
  variable.outputs = {
    a: '',
  }
  variable.outputs.a = start.outputs.query
    //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    data: variable.outputs.a,
  }
  return end.data
  }
`,
        prettierConfig
      )
    ).toMatchSnapshot()
  })
})
