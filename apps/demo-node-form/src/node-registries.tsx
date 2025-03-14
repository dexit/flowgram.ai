import { WorkflowNodeRegistry, Field } from '@flowgram.ai/free-layout-editor';
import { Input, TextArea } from '@douyinfe/semi-ui';

export const DEFAULT_DEMO_REGISTRY: WorkflowNodeRegistry = {
  type: 'custom',
  meta: {},
  defaultPorts: [{ type: 'output' }, { type: 'input' }],
  formMeta: {
    render: () => (
      <div>
        <div>Basic Node</div>
        <p>name</p>
        <Field name="name">
          <Input />
        </Field>
        <p>city</p>
        <Field name="city">
          <Input />
        </Field>
      </div>
    ),
  },
};
