export const fieldWrapperTs = `import React from 'react';

import './index.css';

interface FieldWrapperProps {
  required?: boolean;
  title: string;
  children?: React.ReactNode;
  error?: string;
}

export const FieldWrapper = ({ required, title, children, error }: FieldWrapperProps) => (
  <div className="field-wrapper">
    <div className="field-title">
      {title}
      {required ? <span className="required">*</span> : null}
    </div>
    {children}
    <p className="error-message">{error}</p>
  </div>
);
`;

export const fieldWrapperCss = `.error-message {
  color: #f5222d !important;
}

.required {
  color: #f5222d !important;
  padding-left: 4px
}

.field-wrapper {
  width: 100%;
  margin-bottom: 12px;
}

.field-title {
  margin-bottom: 6px;
}
`;
