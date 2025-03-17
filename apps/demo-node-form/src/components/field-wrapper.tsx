import React from 'react';

import './field-wrapper.css';

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
