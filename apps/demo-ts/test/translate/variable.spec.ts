import { VariableNodeSchema, translateNode } from '../../src'

describe('translate', () => {
  it('Variable - 0 param', () => {
    const node: VariableNodeSchema = {
      id: 'variable_dd605e4e286',
      type: 'variable',
      definition: {
        info: { title: 'variable', description: '', icon: '' },
        outputs: {
          type: 'object',
          properties: {},
        },
        script: { language: 'python', content: '' },
      },
      data: {
        setVariables: {},
      },
    }

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Variable - 1 param', () => {
    const node: VariableNodeSchema = {
      id: 'variable_dd605e4e286',
      type: 'variable',
      definition: {
        info: { title: 'variable', description: '', icon: '' },
        outputs: {
          type: 'object',
          properties: {
            a: { type: 'string' },
          },
        },
        script: { language: 'python', content: '' },
      },
      data: {
        setVariables: {
          '0': {
            left: { type: 'ref', content: '@.a' },
            right: { type: 'expression', content: 'start.outputs.query' },
            operator: 'assign',
          },
        },
      },
    }

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Variable - more params', () => {
    const node: VariableNodeSchema = {
      id: 'variable_dd605e4e286',
      type: 'variable',
      definition: {
        info: { title: 'variable', description: '', icon: '' },
        outputs: {
          type: 'object',
          properties: {
            v_string: { type: 'string' },
            v_integer: { type: 'integer' },
            v_number: { type: 'number' },
            v_boolean: { type: 'boolean' },
            v_array: { type: 'array', items: { type: 'string' } },
            v_object: { type: 'object', properties: { a: { type: 'number' } } },
            v_map: { type: 'map', additionalProperties: { type: 'string' } },
          },
        },
        script: { language: 'python', content: '' },
      },
      data: {
        setVariables: {
          '0': {
            left: { type: 'ref', content: '@.v_string' },
            right: { type: 'expression', content: "'abc'" },
            operator: 'assign',
          },
          '1': {
            left: { type: 'ref', content: '@.v_integer' },
            right: { type: 'expression', content: '10' },
            operator: 'assign',
          },
          '2': {
            left: { type: 'ref', content: '@.v_number' },
            right: { type: 'expression', content: '3.14' },
            operator: 'assign',
          },
          '3': {
            left: { type: 'ref', content: '@.v_boolean' },
            right: { type: 'expression', content: 'True' },
            operator: 'assign',
          },
          '4': {
            left: { type: 'ref', content: '@.v_array' },
            right: { type: 'expression', content: "['a','b']" },
            operator: 'assign',
          },
          '5': {
            left: { type: 'ref', content: '@.v_object' },
            right: { type: 'expression', content: "{'a':1}" },
            operator: 'assign',
          },
          '6': {
            left: { type: 'ref', content: '@.v_map' },
            right: { type: 'expression', content: "{'b':2}" },
            operator: 'assign',
          },
        },
      },
    }

    expect(translateNode(node)).toMatchSnapshot()
  })
})
