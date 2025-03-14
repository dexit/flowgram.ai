import { WorkflowJSON } from '@flowgram.ai/free-layout-editor';

export const DEFAULT_INITIAL_DATA: WorkflowJSON = {
  nodes: [
    {
      id: 'node_0',
      type: 'custom',
      meta: {
        position: { x: 400, y: 0 },
      },
      data: {
        title: 'Custom',
        content: 'Custom node content',
      },
    },
  ],
  edges: [],
};
