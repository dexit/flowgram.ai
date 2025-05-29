export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {
    nums: [1, 2, 3],
    sum: 0,
  }
  Object.assign(start.outputs, __args)
  //=== batch@batch | {level:1,blockIndex:1}
  const batch = {}
  batch.outputs = {}
  batch.localVariables = {
    item: 0,
    index: 0,
  }
  // concurrency: 3
  batch.__array = start.outputs.nums
  batch.__array.forEach((__item, __index) => {
    batch.localVariables.item = __item
    batch.localVariables.index = __index
    //=== assign_sum@variable | {level:2,blockIndex:0,parent:'batch'}
    const assign_sum = {}
    assign_sum.outputs = {}
    start.outputs.sum = start.outputs.sum + batch.localVariables.item
  }) // batch@batch
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    sum: start.outputs.sum,
  }
  return end.data
}
