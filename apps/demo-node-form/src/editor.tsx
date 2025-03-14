import {
  EditorRenderer,
  FlowNodeRegistry,
  FreeLayoutEditorProvider,
  WorkflowJSON,
} from '@flowgram.ai/free-layout-editor';

import { useEditorProps } from './hooks/use-editor-props';
import '@flowgram.ai/free-layout-editor/index.css';
import './index.css';
interface EditorProps {
  registry: FlowNodeRegistry;
  initialData: WorkflowJSON;
}

export const Editor = ({ registry, initialData }: EditorProps) => {
  const editorProps = useEditorProps({ registry, initialData });
  return (
    <FreeLayoutEditorProvider {...editorProps}>
      <div className="demo-free-container">
        <div className="demo-free-layout">
          <EditorRenderer className="demo-free-editor" />
        </div>
      </div>
    </FreeLayoutEditorProvider>
  );
};
