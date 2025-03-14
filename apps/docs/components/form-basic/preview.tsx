import { PreviewEditor } from '../preview-editor';
import { Editor } from '.';

const indexCode = {
  code: `import {
  EditorRenderer,
  FreeLayoutEditorProvider,
} from '@flowgram.ai/free-layout-editor';

import { useEditorProps } from './hooks/use-editor-props'
import '@flowgram.ai/free-layout-editor/index.css';
import './index.css';

export const App = () => {
  const editorProps = useEditorProps()
  return (
    <FreeLayoutEditorProvider {...editorProps}>
      <div className="demo-free-container">
        <div className="demo-free-layout">
          <NodeAddPanel />
          <EditorRenderer className="demo-free-editor" />
        </div>
        <Tools />
        <Minimap />
      </div>
    </FreeLayoutEditorProvider>
  )
};
  `,
  active: true,
};

export const NodeFormBasicPreview = () => {
  const files = {
    'index.tsx': indexCode,
  };
  return (
    <PreviewEditor files={files} previewStyle={{ height: 500 }} editorStyle={{ height: 500 }}>
      <Editor />
    </PreviewEditor>
  );
};
