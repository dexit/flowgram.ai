export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {}
  Object.assign(start.outputs, __args)
  //=== parallel_0@parallel | {level:1,blockIndex:1}
  const parallel_0 = {}
  parallel_0.outputs = {}
  await Promise.all([
    new Promise(async (__resolve, __reject) => {
      //=== parallel_0_branch_0@block | {level:2,blockIndex:0,parent:'parallel_0'}
      const parallel_0_branch_0 = {}
      parallel_0_branch_0.outputs = {}
      //=== script_0@script | {level:3,blockIndex:0,parent:'parallel_0_branch_0'}
      const script_0 = {}
      script_0.outputs = {
        output: '',
      }
      script_0.data = {}
      const __func_script_0 = (inputs, outputs) => {
        outputs.output = inputs.name
      }
      __func_script_0(script_0.data, script_0.outputs)
      parallel_0_branch_0.outputs = script_0.outputs
      parallel_0.outputs.parallel_0_branch_0 = parallel_0_branch_0
      __resolve()
    }), // parallel_0_branch_0@block
    new Promise(async (__resolve, __reject) => {
      //=== parallel_0_branch_1@block | {level:2,blockIndex:1,parent:'parallel_0'}
      const parallel_0_branch_1 = {}
      parallel_0_branch_1.outputs = {}
      //=== parallel_1@parallel | {level:3,blockIndex:0,parent:'parallel_0_branch_1'}
      const parallel_1 = {}
      parallel_1.outputs = {}
      await Promise.all([
        new Promise(async (__resolve, __reject) => {
          //=== parallel_1_branch_0@block | {level:4,blockIndex:0,parent:'parallel_1'}
          const parallel_1_branch_0 = {}
          parallel_1_branch_0.outputs = {}
          //=== script_1@script | {level:5,blockIndex:0,parent:'parallel_1_branch_0'}
          const script_1 = {}
          script_1.outputs = {
            output: '',
          }
          script_1.data = {}
          const __func_script_1 = (inputs, outputs) => {
            outputs.output = inputs.name
          }
          __func_script_1(script_1.data, script_1.outputs)
          parallel_1_branch_0.outputs = script_1.outputs
          parallel_1.outputs.parallel_1_branch_0 = parallel_1_branch_0
          __resolve()
        }), // parallel_1_branch_0@block
        new Promise(async (__resolve, __reject) => {
          //=== parallel_1_branch_1@block | {level:4,blockIndex:1,parent:'parallel_1'}
          const parallel_1_branch_1 = {}
          parallel_1_branch_1.outputs = {}
          //=== parallel_2@parallel | {level:5,blockIndex:0,parent:'parallel_1_branch_1'}
          const parallel_2 = {}
          parallel_2.outputs = {}
          await Promise.all([
            new Promise(async (__resolve, __reject) => {
              //=== parallel_2_branch_0@block | {level:6,blockIndex:0,parent:'parallel_2'}
              const parallel_2_branch_0 = {}
              parallel_2_branch_0.outputs = {}
              //=== script_3@script | {level:7,blockIndex:0,parent:'parallel_2_branch_0'}
              const script_3 = {}
              script_3.outputs = {
                output: '',
              }
              script_3.data = {}
              const __func_script_3 = (inputs, outputs) => {
                outputs.output = inputs.name
              }
              __func_script_3(script_3.data, script_3.outputs)
              parallel_2_branch_0.outputs = script_3.outputs
              parallel_2.outputs.parallel_2_branch_0 = parallel_2_branch_0
              __resolve()
            }), // parallel_2_branch_0@block
            new Promise(async (__resolve, __reject) => {
              //=== parallel_2_branch_1@block | {level:6,blockIndex:1,parent:'parallel_2'}
              const parallel_2_branch_1 = {}
              parallel_2_branch_1.outputs = {}
              //=== script_4@script | {level:7,blockIndex:0,parent:'parallel_2_branch_1'}
              const script_4 = {}
              script_4.outputs = {
                output: '',
              }
              script_4.data = {}
              const __func_script_4 = (inputs, outputs) => {
                outputs.output = inputs.name
              }
              __func_script_4(script_4.data, script_4.outputs)
              parallel_2_branch_1.outputs = script_4.outputs
              parallel_2.outputs.parallel_2_branch_1 = parallel_2_branch_1
              __resolve()
            }), // parallel_2_branch_1@block
          ]) // parallel_2@parallel
          //=== observer_1@script | {level:5,blockIndex:1,parent:'parallel_1_branch_1'}
          const observer_1 = {}
          observer_1.outputs = {
            output: '',
          }
          observer_1.data = {}
          const __func_observer_1 = (inputs, outputs) => {
            outputs.output = inputs.name
          }
          __func_observer_1(observer_1.data, observer_1.outputs)
          parallel_1_branch_1.outputs = observer_1.outputs
          parallel_1.outputs.parallel_1_branch_1 = parallel_1_branch_1
          __resolve()
        }), // parallel_1_branch_1@block
      ]) // parallel_1@parallel
      //=== observer_2@script | {level:3,blockIndex:1,parent:'parallel_0_branch_1'}
      const observer_2 = {}
      observer_2.outputs = {
        output: '',
      }
      observer_2.data = {}
      const __func_observer_2 = (inputs, outputs) => {
        outputs.output = inputs.name
      }
      __func_observer_2(observer_2.data, observer_2.outputs)
      parallel_0_branch_1.outputs = observer_2.outputs
      parallel_0.outputs.parallel_0_branch_1 = parallel_0_branch_1
      __resolve()
    }), // parallel_0_branch_1@block
  ]) // parallel_0@parallel
  //=== observer_3@script | {level:1,blockIndex:2}
  const observer_3 = {}
  observer_3.outputs = {
    output: '',
  }
  observer_3.data = {}
  const __func_observer_3 = (inputs, outputs) => {
    outputs.output = inputs.name
  }
  __func_observer_3(observer_3.data, observer_3.outputs)
  //=== end@end | {level:1,blockIndex:3}
  const end = {}
  end.data = {}
  return end.data
}
