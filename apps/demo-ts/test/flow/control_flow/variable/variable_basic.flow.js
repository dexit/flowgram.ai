export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {
    query: 'hi',
  }
  Object.assign(start.outputs, __args)
  //=== variable@variable | {level:1,blockIndex:1}
  const variable = {}
  variable.outputs = {
    a: '',
  }
  variable.outputs.a = start.outputs.query
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    data: variable.outputs.a,
  }
  return end.data
}
