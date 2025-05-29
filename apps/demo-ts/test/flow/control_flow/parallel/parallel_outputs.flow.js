export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {}
  Object.assign(start.outputs, __args)
  //=== parallel@parallel | {level:1,blockIndex:1}
  const parallel = {}
  parallel.outputs = {
    branch_0: {
      outputs: {
        a: '',
      },
    },
    branch_1: {
      outputs: {
        parallel_2_branch_0: {
          outputs: {
            a: '',
          },
        },
        parallel_2_branch_1: {
          outputs: {
            a: '',
          },
        },
      },
    },
  }
  await Promise.all([
    new Promise(async (__resolve, __reject) => {
      //=== branch_0@block | {level:2,blockIndex:0,parent:'parallel'}
      const branch_0 = {}
      branch_0.outputs = {
        a: '',
      }
      //=== v_0@variable | {level:3,blockIndex:0,parent:'branch_0'}
      const v_0 = {}
      v_0.outputs = {
        a: '',
      }
      v_0.outputs.a = '1'
      branch_0.outputs = v_0.outputs
      parallel.outputs.branch_0 = branch_0
      __resolve()
    }), // branch_0@block
    new Promise(async (__resolve, __reject) => {
      //=== branch_1@block | {level:2,blockIndex:1,parent:'parallel'}
      const branch_1 = {}
      branch_1.outputs = {
        parallel_2_branch_0: {
          outputs: {
            a: '',
          },
        },
        parallel_2_branch_1: {
          outputs: {
            a: '',
          },
        },
      }
      //=== v_1@variable | {level:3,blockIndex:0,parent:'branch_1'}
      const v_1 = {}
      v_1.outputs = {
        a: '',
      }
      v_1.outputs.a = '2'
      //=== parallel_2@parallel | {level:3,blockIndex:1,parent:'branch_1'}
      const parallel_2 = {}
      parallel_2.outputs = {
        parallel_2_branch_0: {
          outputs: {
            a: '',
          },
        },
        parallel_2_branch_1: {
          outputs: {
            a: '',
          },
        },
      }
      await Promise.all([
        new Promise(async (__resolve, __reject) => {
          //=== parallel_2_branch_0@block | {level:4,blockIndex:0,parent:'parallel_2'}
          const parallel_2_branch_0 = {}
          parallel_2_branch_0.outputs = {
            a: '',
          }
          //=== v2@variable | {level:5,blockIndex:0,parent:'parallel_2_branch_0'}
          const v2 = {}
          v2.outputs = {
            a: '',
          }
          v2.outputs.a = '3'
          parallel_2_branch_0.outputs = v2.outputs
          parallel_2.outputs.parallel_2_branch_0 = parallel_2_branch_0
          __resolve()
        }), // parallel_2_branch_0@block
        new Promise(async (__resolve, __reject) => {
          //=== parallel_2_branch_1@block | {level:4,blockIndex:1,parent:'parallel_2'}
          const parallel_2_branch_1 = {}
          parallel_2_branch_1.outputs = {
            a: '',
          }
          //=== v3@variable | {level:5,blockIndex:0,parent:'parallel_2_branch_1'}
          const v3 = {}
          v3.outputs = {
            a: '',
          }
          v3.outputs.a = '4'
          parallel_2_branch_1.outputs = v3.outputs
          parallel_2.outputs.parallel_2_branch_1 = parallel_2_branch_1
          __resolve()
        }), // parallel_2_branch_1@block
      ]) // parallel_2@parallel
      branch_1.outputs = parallel_2.outputs
      parallel.outputs.branch_1 = branch_1
      __resolve()
    }), // branch_1@block
  ]) // parallel@parallel
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    res: parallel.outputs,
  }
  return end.data
}
