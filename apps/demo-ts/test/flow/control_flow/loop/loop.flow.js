export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {
    init: 0,
  }
  Object.assign(start.outputs, __args)
  //=== loop@forloop | {level:1,blockIndex:1}
  const loop = {}
  loop.outputs = {}
  loop.localVariables = {
    index: 0,
  }
  for (
    loop.localVariables.index = 1;
    loop.localVariables.index <= 3;
    loop.localVariables.index += 1
  ) {
    //=== assign@variable | {level:2,blockIndex:0,parent:'loop'}
    const assign = {}
    assign.outputs = {}
    start.outputs.init = start.outputs.init + loop.localVariables.index
  } // loop@forloop
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    sum: start.outputs.init,
  }
  return end.data
}
