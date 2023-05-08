import React from 'react';
import './radio.css';

/**
 * Renders an input element.
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 */
const Radio = props => {
  const { label, className, id, ...inputProps } = props;

  return (
    <div className={`checkbox-input-group ${Boolean(className) ? className : ''}`}>
      <label className="wrapper">
      {
        label ? (
            <label className="label" htmlFor={id}>
            <span>{label}</span>
            &nbsp;
            {inputProps.required && <span>*</span>}
          </label>
        ) : null
      }
      <input {...inputProps} id={id} type="radio" />
        <label className="checkmark" htmlFor={id}></label>
      </label>
    </div>
  );
};

export default Radio;