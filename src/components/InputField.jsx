import React from "react";

const InputField = ({ type, name, value, onChange, placeholder }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField;
