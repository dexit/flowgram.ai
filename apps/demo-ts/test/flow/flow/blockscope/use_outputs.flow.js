export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {}
  Object.assign(start.outputs, __args)
  //=== variable@variable | {level:1,blockIndex:1}
  const variable = {}
  variable.outputs = {
    a: '',
    b: '',
  }
  variable.outputs.a = '1'
  variable.outputs.b = variable.outputs.a
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    result: variable.outputs.b,
  }
  return end.data
}
