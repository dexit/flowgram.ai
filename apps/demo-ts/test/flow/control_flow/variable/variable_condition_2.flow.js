export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {
    query: '',
  }
  Object.assign(start.outputs, __args)
  //=== variable@variable | {level:1,blockIndex:1}
  const variable = {}
  variable.outputs = {
    a: '',
  }
  start.outputs.query = 'hi'
  variable.outputs.a = start.outputs.query
  //=== condition@condition | {level:1,blockIndex:2}
  const condition = {}
  condition.outputs = {}
  //=== case_hello@case | {level:1,blockIndex:0,parent:'condition'}
  if (variable.outputs.a == 'hello') {
    //=== variable_1@variable | {level:2,blockIndex:0,parent:'case_hello'}
    const variable_1 = {}
    variable_1.outputs = {}
    variable.outputs.a = 'hello world'
  } // case_hello@case
  //=== case_default@default | {level:1,blockIndex:1,parent:'condition'}
  else {
  } // case_default@default
  //=== End@end | {level:1,blockIndex:3}
  const End = {}
  End.data = {
    result: variable.outputs.a,
  }
  return End.data
}
