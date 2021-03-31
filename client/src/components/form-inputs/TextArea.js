import React from "react";
import { useField } from "formik";
import ErrorMessage from "../../ErrorMessage";

const FormGroupWrap = ({ isWrapped, children }) =>
  isWrapped ? <div className="form-group">{children}</div> : <>{children}</>;

const TextArea = ({ label, onChange, skinny, ...props }) => {
  let [field, meta, helpers] = useField(props);
  if (onChange) field.onChange = e => onChange(e, helpers);
  if (props.value) field.value = props.value;

  return (
    <FormGroupWrap isWrapped={!skinny}>
      {label && <label>{label}</label>}
      <textarea className="form-control" {...props} {...field} />
      <ErrorMessage error={meta.error} isHidden={!meta.touched} />
    </FormGroupWrap>
  );
};

export default TextArea;
