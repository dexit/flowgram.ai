export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {}
  Object.assign(start.outputs, __args)
  //=== loop@forloop | {level:1,blockIndex:1}
  const loop = {}
  loop.outputs = {
    sum: 0,
  }
  loop.localVariables = {
    i: 0,
  }
  for (
    loop.localVariables.i = 0;
    loop.localVariables.i < 10;
    loop.localVariables.i = loop.localVariables.i + 1
  ) {
    //=== variable@variable | {level:2,blockIndex:0,parent:'loop'}
    const variable = {}
    variable.outputs = {}
    loop.outputs.sum = loop.outputs.sum + loop.localVariables.i
  } // loop@forloop
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    sum: loop.outputs.sum,
  }
  return end.data
}
