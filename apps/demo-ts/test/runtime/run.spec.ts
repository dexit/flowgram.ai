import {
  FlowSchema,
  ScriptNodeSchema,
  runFlowJs,
  runFlowSchema,
  runPlainJS,
  runScriptNodeSchema,
} from '../../src'

describe('runPlainJS', () => {
  // it('.isSchemaValid', () => {
  //   expect(runPlainJS('').isSchemaValid).toBeFalsy()
  //   expect(runPlainJS('0').isSchemaValid).toBeFalsy()
  //   expect(runPlainJS('{a}').isSchemaValid).toBeFalsy()
  //   expect(runPlainJS("{'a':1}").isSchemaValid).toBeFalsy()

  //   expect(runPlainJS('{}').isSchemaValid).toBeTruthy()
  // })

  it('return value', async () => {
    expect(await runPlainJS('return 1+2')).toBe(3)
    expect(await runPlainJS('return Math.max(1,2)')).toBe(2)
    expect(await runPlainJS('return "1"+"2"')).toBe('12')
    expect(await runPlainJS('return')).toBeUndefined()

    expect(await runPlainJS('1+2')).toBeUndefined()
    expect(await runPlainJS('')).toBeUndefined()
  })

  it('interact with closure', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const __a = 123
    expect(async () => await runPlainJS('return __a')).rejects.toThrow(/__a is not defined/)
    expect(async () => await runPlainJS('return runPlainJS.name')).rejects.toThrow(
      /runPlainJS is not defined/
    )
  })

  it('exception', async () => {
    expect(async () => await runPlainJS('return (__a')).rejects.toThrow(SyntaxError)
    expect(async () => await runPlainJS('return __a.b')).rejects.toThrow(ReferenceError)
    expect(async () => await runPlainJS('return __a.b')).rejects.toThrow(/__a is not defined/)
  })
})

describe('run', () => {
  it('runFlowJs exception', async () => {
    expect(await runFlowJs('return (__a')).toEqual({
      error: { code: '-1', msg: "Unexpected token 'return'" },
    })
    expect(await runFlowJs('return __a.b')).toEqual({
      error: { code: '-1', msg: '__a is not defined' },
    })
  })

  it('runFlowJs basic', async () => {
    const js = `export async function __main(__args) {
  //=== start@start | {"level":1,"blockIndex":0}
  const start = {}
  start.outputs = {
    a: 1,
    b: 2,
  }
  Object.assign(start.outputs, __args)
    //=== script@script | {"level":1,"blockIndex":1}
  const script = {}
  script.outputs = {
    output: 0,
  }
  script.data = {
    a: start.outputs.a,
    b: start.outputs.b,
  }
  const __func_script = (inputs, outputs) => {
  outputs.output = inputs.a + inputs.b
  }
  __func_script(script.data, script.outputs)
    //=== end@end | {"level":1,"blockIndex":2}
  const end = {}
  end.data = {
    result: script.outputs.output,
  }
  return end.data
  }
`
    expect(await runFlowJs(js)).toEqual({
      result: 3,
      error: { code: '', msg: '' },
    })
  })

  it('runFlowSchema', async () => {
    const flowSchema: FlowSchema = {
      id: '120576001794',
      nodes: [
        {
          id: 'start',
          type: 'start',
          definition: {
            info: {
              title: 'start',
              description:
                'The starting node of the workflow, used to set the information required for the work',
              icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/dvsmryvd_avi_dvsm/ljhwZthlaukjlkulzlp/icon/icon-Start.png',
            },
            outputs: {
              type: 'object',
              title: 'Output',
              properties: {
                a: { type: 'number', default: 1 },
                b: { type: 'number', default: 2 },
              },
            },
            script: { language: 'python', content: '' },
          },
          data: {},
        },
        {
          id: 'script_ceccec48092',
          type: 'script',
          definition: {
            info: {
              title: 'script',
              description: 'This is a script node, you can edit this node as you want',
              icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/dvsmryvd_avi_dvsm/ljhwZthlaukjlkulzlp/icon/icon-Code.png',
            },
            inputs: {
              properties: {
                a: { title: 'Name', type: 'number' },
                b: { type: 'number' },
              },
              type: 'object',
            },
            outputs: {
              properties: {
                output: { title: 'Output', type: 'number' },
              },
              title: 'Output',
              type: 'object',
            },
            script: {
              language: 'python',
              content: 'outputs.output = inputs.a + inputs.b',
            },
          },
          data: {
            a: { type: 'expression', content: 'start.outputs.a' },
            b: { type: 'expression', content: 'start.outputs.b' },
          },
        },
        {
          id: 'end',
          type: 'end',
          definition: {
            info: {
              title: 'end',
              description:
                'The final node of the workflow, used to return the result information after the workflow is run.',
              icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/dvsmryvd_avi_dvsm/ljhwZthlaukjlkulzlp/icon/icon-End.png',
            },
            inputs: {
              type: 'object',
              properties: { result: { type: 'number' } },
            },
            script: { language: 'python', content: '' },
          },
          data: { result: { type: 'expression', content: 'script.outputs.output' } },
        },
      ],
      setting: { errorHandler: '' },
    }

    expect(await runFlowSchema(flowSchema)).toEqual({
      result: 3,
      error: { code: '', msg: '' },
    })
  })

  it('runFlowSchema', async () => {
    const scriptSchema: ScriptNodeSchema = {
      id: 'script_ceccec48092',
      type: 'script',
      definition: {
        info: { title: 'script' },
        inputs: {
          properties: {
            a: { type: 'number', default: 1 },
            b: { type: 'number', default: 2 },
          },
          type: 'object',
        },
        outputs: {
          properties: { output: { type: 'number' } },
          type: 'object',
        },
        script: {
          language: 'python',
          content: 'outputs.output = inputs.a + inputs.b',
        },
      },
      data: {},
    }

    expect(await runScriptNodeSchema(scriptSchema)).toEqual({
      output: 3,
      error: { code: '', msg: '' },
    })

    expect(await runScriptNodeSchema(scriptSchema, { a: 10, b: 20 })).toEqual({
      output: 30,
      error: { code: '', msg: '' },
    })
  })
})
