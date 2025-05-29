// import _ from 'lodash'
import _ from 'lodash'
import { FlowConditionNodeSchema, FlowNodeSchema, translateNode } from '../../src'

const variable1: FlowNodeSchema = {
  id: 'variable_e0c4615094f',
  type: 'variable',
  definition: {
    info: { title: 'variable_1' },
    outputs: { properties: {}, title: 'Output', type: 'object' },
    script: { language: 'python', content: '' },
  },
  data: {
    setVariables: {
      '0': {
        left: { type: 'ref', content: '$.variable.outputs.a' },
        right: { type: 'expression', content: "'hello world'" },
        operator: 'assign',
      },
    },
  },
}

const variable2: FlowNodeSchema = {
  id: 'variable_dd605e4e286',
  type: 'variable',
  definition: {
    info: { title: 'variable_2', description: '', icon: '' },
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

const conditionMin = {
  id: 'condition_4e0c4615094',
  type: 'condition',
  definition: {
    info: { title: 'condition' },
    script: { language: 'python', content: '' },
  },
  blocks: [
    {
      id: 'branch_f7fdf2437b3',
      type: 'case',
      definition: {
        info: { title: 'case_hello' },
      },
      data: {
        condition: { type: 'expression', content: "variable.outputs.a == 'hello'" },
      },
      blocks: [],
    },
    {
      id: 'branch_f7fdf2437b4',
      type: 'case',
      definition: {
        info: { title: 'case_hello1' },
      },
      data: {
        condition: { type: 'expression', content: "variable.outputs.a == 'hello1'" },
      },
      blocks: [],
    },
    {
      id: 'default_64e0c461509',
      type: 'default',
      definition: {
        info: {
          title: 'case_default',
          description: 'Executed when all conditions are not met',
          icon: '',
        },
      },
      blocks: [],
    },
  ],
}

describe('translate', () => {
  it('Condition - min', () => {
    const node = _.cloneDeep(conditionMin) as FlowConditionNodeSchema

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Condition - case/case/default', () => {
    const node: FlowConditionNodeSchema = {
      id: 'condition_4e0c4615094',
      type: 'condition',
      definition: {
        info: { title: 'condition' },
        script: { language: 'python', content: '' },
      },
      blocks: [
        {
          id: 'branch_f7fdf2437b3',
          type: 'case',
          definition: {
            info: { title: 'case_hello' },
          },
          data: {
            condition: { type: 'expression', content: "variable.outputs.a == 'hello'" },
          },
          blocks: [_.cloneDeep(variable1)],
        },
        {
          id: 'branch_f7fdf2437b4',
          type: 'case',
          definition: {
            info: { title: 'case_hello1' },
          },
          data: {
            condition: { type: 'expression', content: "variable.outputs.a == 'hello1'" },
          },
          blocks: [_.cloneDeep(variable1)],
        },
        {
          id: 'default_64e0c461509',
          type: 'default',
          definition: {
            info: {
              title: 'case_default',
              description: 'Executed when all conditions are not met',
              icon: '',
            },
          },
          blocks: [_.cloneDeep(variable2)],
        },
      ],
    }

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Condition - case(condition(condition))/default(condition)', () => {
    const node = _.cloneDeep(conditionMin) as FlowConditionNodeSchema

    node.blocks[0].blocks = [_.cloneDeep(conditionMin)]
    node.blocks[1].blocks = [_.cloneDeep(conditionMin)]
    node.blocks[2].blocks = [_.cloneDeep(conditionMin)]

    expect(translateNode(node)).toMatchSnapshot()
  })
})
