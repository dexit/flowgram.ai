/* eslint-disable @typescript-eslint/ban-ts-comment */

describe('eval', () => {
  it('return value', () => {
    expect(eval('1+2')).toBe(3)
    expect(eval('Math.max(1,2)')).toBe(2)
    expect(eval('"1"+"2"')).toBe('12')
    expect(eval('')).toBeUndefined()
    /**
     * not rely on statements' completion values. 😭
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#description
     */
    expect(eval('let a=1')).toBeUndefined() //
    // @ts-ignore
    expect(eval(new String('1+2'))).toStrictEqual(new String('1+2'))
  })

  it('interact with closure', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
    let a = 123
    expect(eval('a')).toBe(123)
    expect(eval('a=456')).toBe(456)
  })

  it('exception', () => {
    expect(() => eval('(a')).toThrow(SyntaxError)
    expect(() => eval('a.b')).toThrow(ReferenceError)
    expect(() => eval('a.b')).toThrow(/not defined/)
  })

  // it.skip('performance', () => {
  //   const N = 1000 * 100
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
  //   let a = 123

  //   console.time('eval')
  //   for (let i = 0; i < N; i++) {
  //     eval('Math.max(1,a)')
  //   }
  //   console.timeEnd('eval')

  //   console.time('Function')
  //   for (let i = 0; i < N; i++) {
  //     Function('a', 'return Math.max(1,a)')(a)
  //   }
  //   console.timeEnd('Function')
  // })

  // it.skip('direct & indirect eval', () => {
  //   function nonStrictContext() {
  //     eval?.(`with (Math) console.log(PI);`)
  //   }
  //   function strictContext() {
  //     'use strict'
  //     eval?.(`with (Math) console.log(PI);`)
  //   }
  //   function strictContextStrictEval() {
  //     'use strict'
  //     eval?.(`"use strict"; with (Math) console.log(PI);`)
  //   }

  //   expect(nonStrictContext).not.toThrow()
  //   expect(strictContext).not.toThrow()
  //   expect(strictContextStrictEval).toThrow('Strict mode code may not include a with statement')
  // })
})
