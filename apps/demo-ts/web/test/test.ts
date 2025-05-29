import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/twilight.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/indent-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/foldgutter.css'

import { log } from '../../src'
import './test.css'

// basic style, width, height
// dark theme
// basic event
// fold https://codemirror.net/5/demo/folding.html
// TODO format

const obj = {
  string: 'abc',
  integer: 1,
  number: 3.14,
  booleanTrue: true,
  booleanFale: false,
  array: [1, 2],
  arrayString: ['a1234', 'b1234'],
  object: {
    info: {
      title: 'start',
      description:
        'The starting node of the workflow, used to set the information required for the work',
      icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/lzp^rjvsI/ljhwZthlaukjlkulzlp/Nodeicons/Start.png',
    },
    outputs: { type: 'object', properties: {} },
    script: { language: 'python', content: '', mode: 'default' },
  },
}

const jsonEditor = CodeMirror(document.getElementById('jsonEditor') as HTMLElement, {
  mode: { name: 'javascript', json: true },
  theme: 'twilight',
  lineNumbers: true,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  // indentUnit: 2,
  // tabSize: 2,
  // readOnly: true,
  // lineWrapping: true,
})

jsonEditor.on('change', (editor) => {
  log(editor.getValue(), editor)
})

jsonEditor.setValue(JSON.stringify(obj, null, 2))
