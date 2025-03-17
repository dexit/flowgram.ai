import React from 'react';

// https://github.com/web-infra-dev/rspress/issues/553
const Editor = React.lazy(() =>
  import('@flowgram.ai/demo-node-form').then((module) => ({
    default: module.Editor,
  }))
);

export { Editor };
