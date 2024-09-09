import React from "react";

const InputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  label,
  required = false,
}) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
