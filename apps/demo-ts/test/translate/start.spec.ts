import { StartNodeSchema, translateNode } from '../../src'

describe('translate', () => {
  it('Start - 0 param', () => {
    const node: StartNodeSchema = {
      id: 'start',
      type: 'start',
      definition: {
        info: { title: 'start', description: '', icon: '' },
        outputs: {
          type: 'object',
          properties: {},
        },
        script: { language: 'python', content: '' },
      },
      data: {},
    }

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Start - 1 param', () => {
    const node: StartNodeSchema = {
      id: 'start',
      type: 'start',
      definition: {
        info: { title: 'start', description: '', icon: '' },
        outputs: {
          type: 'object',
          properties: {
            query: { type: 'string', default: 'Hello BlockWise' },
          },
        },
        script: { language: 'python', content: '' },
      },
      data: {},
    }

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Start - more params', () => {
    const node: StartNodeSchema = {
      id: 'start',
      type: 'start',
      definition: {
        info: { title: 'start', description: '', icon: '' },
        outputs: {
          type: 'object',
          properties: {
            v_string: { type: 'string' },
            v_integer: { type: 'integer' },
            v_number: { type: 'number' },
            v_boolean: { type: 'boolean' },
            v_array: { type: 'array', items: { type: 'string' } },
            v_object: { type: 'object', properties: { a: { type: 'string' } } },
            v_map: {
              type: 'map',
              additionalProperties: { type: 'string' },
            },
          },
        },
        script: { language: 'python', content: '' },
      },
      data: {},
    }

    expect(translateNode(node)).toMatchSnapshot()
  })
})
