import _ from 'lodash'
import { FlowNodeSchema, translateNode } from '../../src'

const script: FlowNodeSchema = {
  id: 'script_0033f732f85',
  type: 'script',
  definition: {
    info: {
      title: 'script_1',
    },
    inputs: {
      properties: { name: { title: 'Name', type: 'string' } },
      type: 'object',
    },
    outputs: {
      properties: { output: { title: 'Output', type: 'string' } },
      title: 'Output',
      type: 'object',
    },
    script: {
      language: 'python',
      content: 'outputs.output = inputs.name',
    },
  },
  data: {},
}

describe('translate', () => {
  it('Script - empty', () => {
    const node = _.cloneDeep(script)
    node.definition!.script!.content = ''

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Script - basic', () => {
    const node = _.cloneDeep(script)

    expect(translateNode(node)).toMatchSnapshot()
  })

  it('Script - complex', () => {
    const node = _.cloneDeep(script)
    node.definition!.script!.content = `function insertionSort(arr) {
for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }
    arr[j + 1] = key;
}
return arr;
}`

    expect(translateNode(node)).toMatchSnapshot()
  })
})
