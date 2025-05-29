import { JSBuffer } from '../../src'

describe('JSBuffer', () => {
  it('constructor', () => {
    expect(new JSBuffer().buffer).toEqual([])
    expect(new JSBuffer('  ').buffer).toEqual([])
    // expect(new JSBuffer([]).buffer).toEqual([])
    // expect(new JSBuffer(['1']).buffer).toEqual(['1'])
  })

  it('indent', () => {
    const jsBuffer = new JSBuffer('--')
    jsBuffer.push('aaa')
    expect(jsBuffer.toJs()).toBe('--aaa')

    jsBuffer.indent = '++'
    expect(jsBuffer.toJs()).toBe(`++aaa`)

    jsBuffer.push('bbb')
    expect(jsBuffer.toJs()).toBe(`++aaabbb`)

    jsBuffer.pushLine('ccc')
    expect(jsBuffer.toJs()).toBe(`++aaabbbccc\n++`)
  })

  it('clear', () => {
    const jsBuffer = new JSBuffer()
    jsBuffer.push('aaa')
    jsBuffer.clear()
    expect(jsBuffer.toJs()).toBe('')
    jsBuffer.push('aaa')
    expect(jsBuffer.toJs()).toBe('aaa')
    jsBuffer.clear()
    expect(jsBuffer.toJs()).toBe('')
  })

  it('push', () => {
    const jsBuffer = new JSBuffer()
    jsBuffer.push('aaa')
    expect(jsBuffer.toJs()).toBe('aaa')
    jsBuffer.push('bbb')
    expect(jsBuffer.toJs()).toBe('aaabbb')
  })

  it('pushLine', () => {
    const jsBuffer = new JSBuffer()
    jsBuffer.pushLine('aaa')
    expect(jsBuffer.buffer).toEqual(['aaa', '\n'])
    expect(jsBuffer.toJs()).toBe('aaa\n')
    jsBuffer.pushLine('bbb')
    expect(jsBuffer.toJs()).toBe('aaa\nbbb\n')

    jsBuffer.indent = '--'
    expect(jsBuffer.toJs()).toBe(`--aaa\n--bbb\n--`)
  })

  it('toString', () => {
    const jsBuffer = new JSBuffer()
    jsBuffer.pushLine('aaa')
    expect(jsBuffer.toString()).toBe('aaa\n')
  })
})
