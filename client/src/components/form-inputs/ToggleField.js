import React from "react";
import { useField } from "formik";
import "./ToggleField.scss";

const ToggleField = ({ label, notInline, className, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const toggleValue = () => helpers.setValue(!meta.value);
  let classes = "toggle-field form-group";
  if (className) classes += ` ${className}`;
  if (!notInline) classes += " inline";
  return (
    <div className={classes}>
      {label && <label>{label}</label>}
      <div
        className={`switch ${meta.value ? "checked" : ""}`}
        onClick={toggleValue}
      >
        <input type="checkbox" {...props} {...field} />
        <span className="slider" />
      </div>
    </div>
  );
};

export default ToggleField;
