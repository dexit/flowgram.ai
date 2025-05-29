/* eslint-disable @typescript-eslint/ban-ts-comment */

describe('import', () => {
  it('return value', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const __main = (await import('./add.flow')).__main
    expect(__main(1, 2)).toBe(3)
  })
})
