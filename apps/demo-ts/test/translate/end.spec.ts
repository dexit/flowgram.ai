import { EndNodeSchema, translateNode } from '../../src'

describe('translate', () => {
  it('End - 0 param', () => {
    const node: EndNodeSchema = {
      id: 'end',
      type: 'end',
      definition: {
        info: { title: 'end', description: '', icon: '' },
        inputs: {
          type: 'object',
          properties: {},
        },
        script: { language: 'python', content: '' },
      },
      data: {},
    }

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('End - 1 param', () => {
    const node: EndNodeSchema = {
      id: 'end',
      type: 'end',
      definition: {
        info: { title: 'end', description: '', icon: '' },
        inputs: {
          type: 'object',
          properties: {
            data: { type: 'string' },
          },
        },
        script: { language: 'python', content: '' },
      },
      data: {
        data: { type: 'expression', content: 'start.outputs.query' },
      },
    }

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('End - mores params', () => {
    const node: EndNodeSchema = {
      id: 'end',
      type: 'end',
      definition: {
        info: { title: 'end', description: '', icon: '' },
        inputs: {
          type: 'object',
          properties: {
            v_string: { type: 'string' },
            v_integer: { type: 'integer' },
            v_number: { type: 'number' },
            v_boolean: { type: 'boolean' },
            v_array: { type: 'array', items: { type: 'string' } },
            v_object: { type: 'object' },
            v_map: { type: 'map', additionalProperties: { type: 'string' } },
          },
        },
        script: { language: 'python', content: '' },
      },
      data: {
        v_string: { type: 'expression', content: "''" },
        v_integer: { type: 'expression', content: '10' },
        v_number: { type: 'expression', content: '3.14' },
        v_boolean: { type: 'expression', content: 'True' },
        v_array: { type: 'expression', content: "['a','b']" },
        v_object: { type: 'expression', content: "{'a':'abc'}" },
        v_map: { type: 'expression', content: "{'b':'xyz'}" },
      },
    }

    expect(translateNode(node)).toMatchSnapshot()
  })
})
