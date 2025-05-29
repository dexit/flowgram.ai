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
    branch_2: {
      outputs: {},
    },
    branch_3: {
      outputs: {},
    },
    branch_4: {
      outputs: {},
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
    new Promise(async (__resolve, __reject) => {
      //=== branch_2@block | {level:2,blockIndex:2,parent:'parallel'}
      const branch_2 = {}
      branch_2.outputs = {}
      //=== batch@batch | {level:3,blockIndex:0,parent:'branch_2'}
      const batch = {}
      batch.outputs = {}
      batch.localVariables = {
        item: 0,
        index: 0,
      }
      // concurrency: 1
      batch.__array = [1, 2, 3]
      batch.__array.forEach((__item, __index) => {
        batch.localVariables.item = __item
        batch.localVariables.index = __index
        //=== variable_empty@variable | {level:4,blockIndex:0,parent:'batch'}
        const variable_empty = {}
        variable_empty.outputs = {}
      }) // batch@batch
      branch_2.outputs = batch.outputs
      parallel.outputs.branch_2 = branch_2
      __resolve()
    }), // branch_2@block
    new Promise(async (__resolve, __reject) => {
      //=== branch_3@block | {level:2,blockIndex:3,parent:'parallel'}
      const branch_3 = {}
      branch_3.outputs = {}
      //=== loop@forloop | {level:3,blockIndex:0,parent:'branch_3'}
      const loop = {}
      loop.outputs = {}
      loop.localVariables = {
        i: 0,
      }
      for (
        loop.localVariables.i = 0;
        loop.localVariables.i < 3;
        loop.localVariables.i = loop.localVariables.i + 1
      ) {
        //=== variable_empty_1@variable | {level:4,blockIndex:0,parent:'loop'}
        const variable_empty_1 = {}
        variable_empty_1.outputs = {}
      } // loop@forloop
      branch_3.outputs = loop.outputs
      parallel.outputs.branch_3 = branch_3
      __resolve()
    }), // branch_3@block
    new Promise(async (__resolve, __reject) => {
      //=== branch_4@block | {level:2,blockIndex:4,parent:'parallel'}
      const branch_4 = {}
      branch_4.outputs = {}
      //=== condition@condition | {level:3,blockIndex:0,parent:'branch_4'}
      const condition = {}
      condition.outputs = {}
      //=== condition_case_1@case | {level:3,blockIndex:0,parent:'condition'}
      if (true) {
        //=== variable_empty_2@variable | {level:4,blockIndex:0,parent:'condition_case_1'}
        const variable_empty_2 = {}
        variable_empty_2.outputs = {}
      } // condition_case_1@case
      //=== condition_default@default | {level:3,blockIndex:1,parent:'condition'}
      else {
        //=== variable_empty_3@variable | {level:4,blockIndex:0,parent:'condition_default'}
        const variable_empty_3 = {}
        variable_empty_3.outputs = {}
      } // condition_default@default
      branch_4.outputs = condition.outputs
      parallel.outputs.branch_4 = branch_4
      __resolve()
    }), // branch_4@block
    new Promise(async (__resolve, __reject) => {
      //=== branch_5@block | {level:2,blockIndex:5,parent:'parallel'}
      const branch_5 = {}
      branch_5.outputs = {}
      parallel.outputs.branch_5 = branch_5
      __resolve()
    }), // branch_5@block
  ]) // parallel@parallel
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    res: parallel.outputs,
  }
  return end.data
}
