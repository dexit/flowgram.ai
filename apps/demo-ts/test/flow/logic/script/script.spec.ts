import { runCases } from '../../util'

runCases(
  [
    'script_adder',
    { name: 'script_adder', args: { a: -1, b: 1 } },
    'script_join',
    'script_sort',
    { name: 'script_sort', args: { nums: [1, 2, 3] } },
    { name: 'script_sort', args: { nums: [4, 2, 2, 3, 1, 1, 3] } },
  ],
  __dirname
)
