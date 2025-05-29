export interface RunRecord {
  name: string
  schema: string
  // js: string
  // result: string
}

export interface ModelData {
  records: RunRecord[]
}

export class EmptyNameError extends Error {}
export class DuplicatedNameError extends Error {}

export interface Storage {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
  clear(): void
}

export const TOKEN = 'bwts'

class Model {
  private data: ModelData
  public storage!: Storage
  public onChange!: () => void

  constructor(storage?: Storage) {
    if (!storage) {
      this.storage = window.localStorage
    }

    this.init()
  }

  private init() {
    const rawdata = this.storage.getItem(TOKEN)
    const initialData = { records: [] } as ModelData

    if (!rawdata) {
      this.data = initialData
      this.flush()
    } else {
      try {
        this.data = JSON.parse(rawdata)
      } catch (error) {
        this.data = initialData
        this.flush()
      }
    }
  }

  private flush() {
    if (this.data) {
      this.storage.setItem(TOKEN, JSON.stringify(this.data))

      this.onChange?.()
    }
  }

  getRecords(): RunRecord[] {
    return this.data.records
  }

  getRecord(name: string): RunRecord | undefined {
    return this.data.records.find((r) => r.name === name)
  }

  addRecord(record: RunRecord) {
    // check name
    if (!record.name) {
      throw new EmptyNameError()
    }
    const index = this.data.records.findIndex((r) => r.name === record.name)
    if (index >= 0) {
      throw new DuplicatedNameError(`"${record.name}" is duplicated`)
    }

    this.data.records.push(record)
    this.flush()
  }

  addOrUpdateRecord(record: RunRecord) {
    const existed = this.data.records.findIndex((r) => r.name === record.name) >= 0
    existed ? this.updateRecord(record) : this.addRecord(record)
  }

  deleteRecord(record: RunRecord) {
    const index = this.data.records.findIndex((r) => r.name === record.name)
    if (index >= 0) {
      this.data.records.splice(index, 1)
      this.flush()
    }
  }

  updateRecord(record: RunRecord) {
    const r = this.data.records.find((r) => r.name === record.name)
    if (r) {
      Object.assign(r, record)
      this.flush()
    }
  }
}

export const model = new Model()
