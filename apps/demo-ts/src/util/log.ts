import debug from 'debug'

export const info = debug('log:info')
export const log = info
export const warn = debug('log:warn')
export const error = debug('log:error')
