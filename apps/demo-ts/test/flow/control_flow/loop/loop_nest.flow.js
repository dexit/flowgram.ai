export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {}
  Object.assign(start.outputs, __args)
  //=== v@variable | {level:1,blockIndex:1}
  const v = {}
  v.outputs = {
    array0: [],
    array1: [],
    ret: '',
  }
  v.outputs.array0 = [1, 2]
  v.outputs.array1 = [3, 4]
  v.outputs.ret = ''
  //=== loop_0@forloop | {level:1,blockIndex:2}
  const loop_0 = {}
  loop_0.outputs = {}
  loop_0.localVariables = {
    i: 0,
  }
  for (
    loop_0.localVariables.i = 0;
    loop_0.localVariables.i < v.outputs.array0.length;
    loop_0.localVariables.i += 1
  ) {
    //=== loop_1@forloop | {level:2,blockIndex:0,parent:'loop_0'}
    const loop_1 = {}
    loop_1.outputs = {}
    loop_1.localVariables = {
      j: 0,
    }
    for (
      loop_1.localVariables.j = 0;
      loop_1.localVariables.j < v.outputs.array1.length;
      loop_1.localVariables.j += 1
    ) {
      //=== join@variable | {level:3,blockIndex:0,parent:'loop_1'}
      const join = {}
      join.outputs = {}
      v.outputs.ret =
        v.outputs.ret +
        `${v.outputs.array0[loop_0.localVariables.i]}-${v.outputs.array1[loop_1.localVariables.j]} `
    } // loop_1@forloop
  } // loop_0@forloop
  //=== end@end | {level:1,blockIndex:3}
  const end = {}
  end.data = {
    ret: v.outputs.ret,
  }
  return end.data
}
