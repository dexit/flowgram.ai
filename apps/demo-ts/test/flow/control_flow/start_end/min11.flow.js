export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {
    query: 'Hello BlockWise',
  }
  Object.assign(start.outputs, __args)
  //=== end@end | {level:1,blockIndex:1}
  const end = {}
  end.data = {
    data: start.outputs.query,
  }
  return end.data
}
