export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {}
  Object.assign(start.outputs, __args)
  //=== batch@batch | {level:1,blockIndex:1}
  const batch = {}
  batch.outputs = {
    sum: 0,
  }
  batch.localVariables = {
    item: 0,
    index: 0,
  }
  // concurrency: 1
  batch.__array = [1, 2, 3, 4, 5]
  batch.__array.forEach((__item, __index) => {
    batch.localVariables.item = __item
    batch.localVariables.index = __index
    //=== variable@variable | {level:2,blockIndex:0,parent:'batch'}
    const variable = {}
    variable.outputs = {}
    batch.outputs.sum = batch.outputs.sum + batch.localVariables.item
  }) // batch@batch
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    res: batch.outputs.sum,
  }
  return end.data
}
