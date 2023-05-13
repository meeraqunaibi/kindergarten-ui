import React from 'react';
import './textarea.css';

/**
 * Renders an input element.
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 */
const Textarea = props => {
  const { label, className, ...inputProps } = props;

  return (
    <div className={`input-group ${Boolean(className) ? className : ''}`}>
      {
        label ? (
          <label>
            <span>{label}</span>
            &nbsp;
            {inputProps.required && <span>*</span>}
          </label>
        ) : null
      }
      <textarea {...inputProps} />
    </div>
  );
};

export default Textarea;
