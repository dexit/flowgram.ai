// import _ from 'lodash'
import _ from 'lodash'
import { FlowNodeSchema, translateNode } from '../../src'

const variable1: FlowNodeSchema = {
  id: 'variable_88d5e7cdeb6',
  type: 'variable',
  definition: {
    info: {
      title: 'assign',
    },
    outputs: { properties: {}, title: 'Output', type: 'object' },
    script: { language: 'python', content: '' },
  },
  data: {
    setVariables: {
      '0': {
        left: { type: 'ref', content: '$.start.outputs.init' },
        right: {
          type: 'expression',
          content: 'start.outputs.init + loop.localVariables.index',
        },
        operator: 'assign',
      },
    },
  },
}

const forloopMin = {
  id: 'forloop_b288d5e7cde',
  type: 'forloop',
  definition: {
    info: {
      title: 'loop',
    },
    outputs: { title: 'Output', type: 'object', flow: { index: 0 } },
    script: { language: 'python', content: '', mode: 'default' },
    localVariables: {
      type: 'object',
      properties: { index: { type: 'integer', flow: { index: 0 } } },
    },
  },
  data: {
    initializer: { index: { type: 'expression', content: '1' } },
    condition: { type: 'expression', content: 'loop.localVariables.index <= 3' },
    step: { type: 'expression', content: 'loop.localVariables.index += 1' },
  },
  blocks: [],
}

const forloop2 = {
  id: 'forloop_b288d5e7cde',
  type: 'forloop',
  definition: {
    info: {
      title: 'loop',
    },
    outputs: { title: 'Output', type: 'object', flow: { index: 0 } },
    script: { language: 'python', content: '', mode: 'default' },
    localVariables: {
      type: 'object',
      properties: {
        left: { type: 'integer', flow: { index: 0 } },
        right: { type: 'integer', flow: { index: 0 } },
      },
    },
  },
  data: {
    initializer: {
      left: { type: 'expression', content: '1' },
      right: { type: 'expression', content: '10' },
    },
    condition: {
      type: 'expression',
      content: 'loop.localVariables.left <= loop.localVariables.right',
    },
    step: {
      type: 'expression',
      content: 'loop.localVariables.left += 1, loop.localVariables.right -= 1',
    },
  },
  blocks: [],
}

const break0 = {
  id: 'break_4c661c24008',
  type: 'break',
  definition: {
    info: {
      title: 'Break',
    },
    script: { language: 'python', content: '', mode: 'default' },
  },
}

describe('translate', () => {
  it('Condition - min', () => {
    const node = _.cloneDeep(forloopMin) as FlowNodeSchema

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Forloop - basic', () => {
    const node = _.cloneDeep(forloopMin) as FlowNodeSchema
    node.blocks?.push(_.cloneDeep(variable1))

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Forloop - multi initilizers', () => {
    const node = _.cloneDeep(forloop2) as FlowNodeSchema

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Forloop - break', () => {
    const node = _.cloneDeep(forloopMin) as FlowNodeSchema
    node.blocks?.push(_.cloneDeep(break0))

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Forloop - nest', () => {
    const node = _.cloneDeep(forloopMin) as FlowNodeSchema
    const node1 = _.cloneDeep(forloopMin) as FlowNodeSchema

    node1.blocks?.push(_.cloneDeep(forloopMin) as FlowNodeSchema)
    node.blocks?.push(node1)

    expect(translateNode(node)).toMatchSnapshot()
  })
})
