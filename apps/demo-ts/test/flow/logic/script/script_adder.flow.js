export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {
    a: 1,
    b: 2,
  }
  Object.assign(start.outputs, __args)
  //=== script@script | {level:1,blockIndex:1}
  const script = {}
  script.outputs = {
    output: 0,
  }
  script.data = {
    a: start.outputs.a,
    b: start.outputs.b,
  }
  const __func_script = (inputs, outputs) => {
    outputs.output = inputs.a + inputs.b
  }
  __func_script(script.data, script.outputs)
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    result: script.outputs.output,
  }
  return end.data
}
