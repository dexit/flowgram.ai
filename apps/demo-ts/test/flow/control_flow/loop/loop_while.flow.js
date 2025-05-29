export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {}
  Object.assign(start.outputs, __args)
  //=== while_0@forloop | {level:1,blockIndex:1}
  const while_0 = {}
  while_0.outputs = {}
  while_0.localVariables = {
    finished: false,
  }
  for (while_0.localVariables.finished = false; !while_0.localVariables.finished; '') {
    //=== assign@variable | {level:2,blockIndex:0,parent:'while_0'}
    const assign = {}
    assign.outputs = {}
    while_0.localVariables.finished = true
  } // while_0@forloop
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {}
  return end.data
}
