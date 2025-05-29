import { runCases } from '../../util'

runCases(
  [
    'batch',
    { name: 'batch', args: { nums: [] } },
    { name: 'batch', args: { nums: [-3, -2, -1, 1, 2, 3] } },
    'batch_outputs',
  ],
  __dirname
)
