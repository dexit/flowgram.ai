export class JSBuffer {
  buffer: string[] = []

  constructor(public indent = '') {}

  clear(): JSBuffer {
    this.buffer = []
    return this
  }

  push(...args: string[]): JSBuffer {
    this.buffer.push(...args)
    return this
  }

  pushLine(...args: string[]): JSBuffer {
    this.buffer.push(...args, '\n')
    return this
  }

  toJs(separator: string = ''): string {
    // TODO js string perf
    // FIXME last line indent
    return (
      this.buffer
        .join(separator)
        .split('\n')
        .map((line) => `${this.indent}${line}`)
        // .map((line) => (line !== '\n' ? `${this.indent}${line}` : line))
        .join('\n')
    )
  }

  toString(): string {
    return this.toJs()
  }
}
