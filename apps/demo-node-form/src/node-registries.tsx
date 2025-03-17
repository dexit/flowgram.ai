import { WorkflowNodeRegistry } from '@flowgram.ai/free-layout-editor';

import { DEFAULT_FORM_META } from './form-meta';

export const DEFAULT_DEMO_REGISTRY: WorkflowNodeRegistry = {
  type: 'custom',
  meta: {},
  defaultPorts: [{ type: 'output' }, { type: 'input' }],
  formMeta: DEFAULT_FORM_META,
};
