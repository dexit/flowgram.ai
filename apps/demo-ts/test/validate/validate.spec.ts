import { InvalidSchemaError, validateOrThrow } from '../../src'

describe('validate', () => {
  it('NodeTranslator', () => {
    expect(() =>
      validateOrThrow({
        id: 'unknown',
        type: 'unknown',
        data: {},
      })
    ).toThrow(InvalidSchemaError)

    expect(() =>
      validateOrThrow({
        id: 'unknown',
        type: 'unknown',
        definition: {
          outputs: { type: 'object', properties: {} },
          script: { language: 'python', content: '' },
        },
        data: {},
      })
    ).toThrow(InvalidSchemaError)

    expect(() =>
      validateOrThrow({
        id: 'unknown',
        type: 'unknown',
        definition: {
          info: { title: '', description: '', icon: '' },
          outputs: { type: 'object', properties: {} },
          script: { language: 'python', content: '' },
        },
        data: {},
      })
    ).toThrow(InvalidSchemaError)
  })
})
