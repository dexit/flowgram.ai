export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {}
  Object.assign(start.outputs, __args)
  //=== adder@script | {level:1,blockIndex:1}
  const adder = {}
  adder.outputs = {
    output: 0,
  }
  adder.data = {
    a: 1,
    b: 2,
  }
  const __func_adder = (inputs, outputs) => {
    outputs.output = inputs.a + inputs.b
  }
  __func_adder(adder.data, adder.outputs)
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    result: adder.outputs.output,
  }
  return end.data
}
