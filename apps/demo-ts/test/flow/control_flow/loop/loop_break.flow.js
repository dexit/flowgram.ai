export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {}
  Object.assign(start.outputs, __args)
  //=== variable@variable | {level:1,blockIndex:1}
  const variable = {}
  variable.outputs = {
    nums: [],
    result: 0,
  }
  variable.outputs.nums = [1, 2, 3, 4, 5]
  variable.outputs.result = 0
  //=== loop@forloop | {level:1,blockIndex:2}
  const loop = {}
  loop.outputs = {}
  loop.localVariables = {
    i: 0,
    item: 0,
  }
  for (
    loop.localVariables.i = 0, loop.localVariables.item = 0;
    loop.localVariables.i < variable.outputs.nums.length;
    loop.localVariables.i += 1
  ) {
    //=== assign@variable | {level:2,blockIndex:0,parent:'loop'}
    const assign = {}
    assign.outputs = {}
    variable.outputs.result = variable.outputs.nums[loop.localVariables.i]
    //=== condition@condition | {level:2,blockIndex:1,parent:'loop'}
    const condition = {}
    condition.outputs = {}
    //=== case_1@case | {level:2,blockIndex:0,parent:'condition'}
    if (variable.outputs.nums[loop.localVariables.i] >= 3) {
      //=== Break@break | {level:3,blockIndex:0,parent:'case_1'}
      break
    } // case_1@case
    //=== case_default@default | {level:2,blockIndex:1,parent:'condition'}
    else {
    } // case_default@default
  } // loop@forloop
  //=== end@end | {level:1,blockIndex:3}
  const end = {}
  end.data = {
    result: variable.outputs.result,
  }
  return end.data
}
