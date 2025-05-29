export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {
    query: 'hello',
  }
  Object.assign(start.outputs, __args)
  //=== script_join@script | {level:1,blockIndex:1}
  const script_join = {}
  script_join.outputs = {
    output: '',
  }
  script_join.data = {
    a: start.outputs.query,
    b: ' world',
  }
  const __func_script_join = (inputs, outputs) => {
    outputs.output = inputs.a + inputs.b
  }
  __func_script_join(script_join.data, script_join.outputs)
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    result: script_join.outputs.output,
  }
  return end.data
}
