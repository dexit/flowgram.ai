import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/twilight.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/indent-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/foldgutter.css'
import * as prettier from 'prettier/standalone.mjs'
import prettierPluginBabel from 'prettier/plugins/babel.mjs'
import prettierPluginEstree from 'prettier/plugins/estree.mjs'
import { error, FlowSchema, log, runFlowJs, translateFlow } from '../../src/index'
import { codeMirrorBaseConfig } from './util'
import './styles.css'
import { model } from './model'

document.addEventListener('DOMContentLoaded', () => {
  const schemaEditor = CodeMirror(
    document.getElementById('schemaEditor') as HTMLElement,
    Object.assign({}, codeMirrorBaseConfig, {
      readOnly: false,
      cursorBlinkRate: 530,
    })
  )

  const jsEditor = CodeMirror(
    document.getElementById('jsEditor') as HTMLElement,
    Object.assign({}, codeMirrorBaseConfig, {
      mode: { name: 'javascript' },
    })
  )

  const resultEditor = CodeMirror(
    document.getElementById('resultEditor') as HTMLElement,
    Object.assign({}, codeMirrorBaseConfig, {
      lineWrapping: true,
    })
  )

  const runButton = document.getElementById('run')
  const recordNameText = document.getElementById('recordName') as HTMLInputElement
  const recordsSelect = document.getElementById('records') as HTMLSelectElement

  if (
    !schemaEditor ||
    !jsEditor ||
    !resultEditor ||
    !runButton ||
    !recordNameText ||
    !recordsSelect
  ) {
    return
  }

  const handleModelChange = () => {
    const records = model.getRecords()
    log('model.onChange', records)
    recordsSelect.innerHTML = records
      .map((record) => `<option value="${record.name}">${record.name}</option>`)
      .join('')

    if (records.length) {
      recordsSelect.value = records[0].name
    }
    if (recordNameText.value) {
      recordsSelect.value = recordNameText.value
    }

    // eslint-disable-next-line no-debugger
    // debugger
    if (recordsSelect.value) {
      const record = model.getRecord(recordsSelect.value)
      if (record) {
        schemaEditor.setValue(record.schema)
      }
    }
  }

  const translateAndRunSchema = async () => {
    const schema = JSON.parse(schemaEditor.getValue())
    const flowSchema: FlowSchema = schema.value ?? schema
    log('flowSchema', flowSchema)

    const js = await prettier.format(
      translateFlow(flowSchema),
      Object.assign(
        {
          parser: 'babel',
          plugins: [prettierPluginBabel, prettierPluginEstree],
        },
        {
          trailingComma: 'es5',
          tabWidth: 2,
          printWidth: 100,
          semi: false,
          singleQuote: true,
        }
      )
    )
    jsEditor.setValue(js)

    const resultObj = await runFlowJs(js)
    log('resultObj', resultObj)
    const resultStr = JSON.stringify(resultObj, null, 2)
    resultEditor.setValue(resultStr)

    // Save record
    if (recordNameText.value) {
      try {
        model.addOrUpdateRecord({ name: recordNameText.value, schema: schemaEditor.getValue() })
      } catch (e) {
        error(e)
      }
    }
  }

  model.onChange = handleModelChange
  runButton.addEventListener('click', translateAndRunSchema)
  recordsSelect.addEventListener('change', translateAndRunSchema)

  handleModelChange()
})
