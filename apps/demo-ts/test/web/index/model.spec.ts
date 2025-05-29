/**
 * @jest-environment jsdom
 */
import { model, TOKEN } from '../../../web/index/model'

describe('web/index/model', () => {
  it('model', () => {
    expect(model).not.toBeUndefined()
  })

  it('record CRUD', () => {
    const r1 = { name: 't1', schema: '{"a":1}' }
    const r2 = { name: 't2', schema: '{"a":2}' }

    expect(model.getRecords()).toEqual([])

    model.addRecord(r1)
    model.addRecord(r2)
    expect(model.getRecords()).toEqual([r1, r2])
    expect(model.storage.getItem(TOKEN)).toEqual(JSON.stringify({ records: [r1, r2] }))

    r2.schema = '{"a":3}'
    model.updateRecord(r2)
    expect(model.getRecords()).toEqual([r1, r2])
    expect(model.storage.getItem(TOKEN)).toEqual(JSON.stringify({ records: [r1, r2] }))

    model.deleteRecord(r1)
    expect(model.getRecords()).toEqual([r2])
    model.deleteRecord(r1)
    expect(model.getRecords()).toEqual([r2])
    model.deleteRecord(r2)
    expect(model.getRecords()).toEqual([])
  })

  it('onChange', () => {
    const r1 = { name: 't1', schema: '{"a":1}' }
    model.onChange = () => {
      expect(model.getRecords()).toEqual([r1])
    }

    model.addRecord(r1)
  })
})
