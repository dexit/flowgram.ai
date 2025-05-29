
export const codeMirrorBaseConfig: CodeMirror.EditorConfiguration = Object.freeze({
  mode: { name: 'javascript', json: true },
  lineNumbers: true,
  lineWrapping: false,
  theme: 'twilight',
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  readOnly: true,
  cursorBlinkRate: -1,
})