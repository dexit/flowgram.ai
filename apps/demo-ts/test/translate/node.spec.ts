import { BasicType, NodeTranslator } from '../../src'

describe('translate', () => {
  it('NodeTranslator', () => {
    expect(() =>
      NodeTranslator.create({
        id: 'unknown',
        type: 'unknown',
        definition: {
          info: { title: '', description: '', icon: '' },
          outputs: {
            type: 'object',
            properties: {},
          },
          script: { language: 'python', content: '' },
        },
        data: {},
      })
    ).toThrow(/invalid node type/)

    expect(
      () =>
        new NodeTranslator({
          id: 'unknown',
          type: 'unknown',
          data: {},
        })
    ).toThrow()

    expect(
      () =>
        new NodeTranslator({
          id: 'unknown',
          type: 'unknown',
          definition: {
            outputs: { type: 'object', properties: {} },
            script: { language: 'python', content: '' },
          },
          data: {},
        })
    ).toThrow()

    expect(
      () =>
        new NodeTranslator({
          id: 'unknown',
          type: 'unknown',
          definition: {
            info: { title: '', description: '', icon: '' },
            outputs: { type: 'object', properties: {} },
            script: { language: 'python', content: '' },
          },
          data: {},
        })
    ).toThrow()

    expect(() =>
      new NodeTranslator({
        id: 'start',
        type: 'start',
        definition: {
          info: { title: 'start', description: '', icon: '' },
          outputs: { type: 'object', properties: {} },
          script: { language: 'python', content: '' },
        },
        data: {},
        blocks: [],
      }).toJs()
    ).toThrow()
  })

  it('NodeTranslator.getDefaultLiteral', () => {
    const node = new NodeTranslator({
      id: 'start',
      type: 'start',
      definition: {
        info: { title: 'start', description: '', icon: '' },
        outputs: { type: 'object', properties: {} },
        script: { language: 'python', content: '' },
      },
      data: {},
      blocks: [],
    })

    expect(() => node.getDefaultLiteral({ type: 'unknown' as BasicType })).toThrow(/invalid type/)
  })

  it('NodeTranslator.getLiteral', () => {
    const node = new NodeTranslator({
      id: 'start',
      type: 'start',
      definition: {
        info: { title: 'start', description: '', icon: '' },
        outputs: { type: 'object', properties: {} },
        script: { language: 'python', content: '' },
      },
      data: {},
      blocks: [],
    })

    expect(node.getLiteral()).toBe('')
    expect(node.getLiteral("''")).toBe('"\'\'"')
    expect(node.getLiteral("'a'")).toBe('"\'a\'"')
    expect(node.getLiteral('1')).toBe("'1'")
    expect(node.getLiteral({ type: 'expression', content: 'start.outputs.a = 1' })).toBe(
      'start.outputs.a = 1'
    )
    expect(node.getLiteral({ type: 'refPath', content: 'abc' })).toBe('abc')
    expect(node.getLiteral({ type: 'ref', content: 'abc' })).toBe('abc')
    expect(node.getLiteral({ type: 'template', content: 'abc' })).toBe('abc')
  })
})
