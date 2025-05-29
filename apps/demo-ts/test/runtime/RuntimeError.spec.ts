import { RuntimeError } from '../../src/index'

describe('RuntimeError', () => {
  it('constructor', () => {
    expect(new RuntimeError().code).toBe('')
    expect(new RuntimeError().msg).toBe('')
    expect(new RuntimeError('1', 'ok').code).toBe('1')
    expect(new RuntimeError('1', 'ok').msg).toBe('ok')
    expect(new RuntimeError().toJSON()).toEqual({ code: '', msg: '' })
    expect(new RuntimeError().toString()).toBe("{code:'',msg:''}")
  })
})
