export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {}
  Object.assign(start.outputs, __args)
  //=== variable@variable | {level:1,blockIndex:1}
  const variable = {}
  variable.outputs = {
    a: '',
  }
  variable.outputs.a = '0'
  //=== parallel@parallel | {level:1,blockIndex:2}
  const parallel = {}
  parallel.outputs = {}
  await Promise.all([
    new Promise(async (__resolve, __reject) => {
      //=== branch_1@block | {level:2,blockIndex:0,parent:'parallel'}
      const branch_1 = {}
      branch_1.outputs = {}
      //=== assign_1@variable | {level:3,blockIndex:0,parent:'branch_1'}
      const assign_1 = {}
      assign_1.outputs = {}
      variable.outputs.a = '1'
      branch_1.outputs = assign_1.outputs
      parallel.outputs.branch_1 = branch_1
      __resolve()
    }), // branch_1@block
    new Promise(async (__resolve, __reject) => {
      //=== branch_2@block | {level:2,blockIndex:1,parent:'parallel'}
      const branch_2 = {}
      branch_2.outputs = {}
      //=== assign_2@variable | {level:3,blockIndex:0,parent:'branch_2'}
      const assign_2 = {}
      assign_2.outputs = {}
      variable.outputs.a = '2'
      branch_2.outputs = assign_2.outputs
      parallel.outputs.branch_2 = branch_2
      __resolve()
    }), // branch_2@block
    new Promise(async (__resolve, __reject) => {
      //=== branch_3@block | {level:2,blockIndex:2,parent:'parallel'}
      const branch_3 = {}
      branch_3.outputs = {}
      //=== assign_3@variable | {level:3,blockIndex:0,parent:'branch_3'}
      const assign_3 = {}
      assign_3.outputs = {}
      variable.outputs.a = '3'
      branch_3.outputs = assign_3.outputs
      parallel.outputs.branch_3 = branch_3
      __resolve()
    }), // branch_3@block
  ]) // parallel@parallel
  //=== end@end | {level:1,blockIndex:3}
  const end = {}
  end.data = {
    result: variable.outputs.a,
  }
  return end.data
}
