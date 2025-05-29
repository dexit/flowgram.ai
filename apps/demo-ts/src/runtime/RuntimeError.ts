import JSON5 from 'json5'

export class RuntimeError {
  static CODE = {
    SUCCESS: '',
    INVALID_SCHEMA: '1',
    FAIL: '-1',
  }

  static MSG = {
    SUCCESS: '',
    INVALID_SCHEMA: 'Schema is invalid',
    FAIL: 'Fail',
  }

  constructor(
    public code: string = RuntimeError.CODE.SUCCESS,
    public msg: string = RuntimeError.MSG.SUCCESS
  ) {}

  toJSON() {
    return {
      code: this.code,
      msg: this.msg,
    }
  }

  toString() {
    return JSON5.stringify(this.toJSON())
  }
}
