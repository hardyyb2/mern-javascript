import React from "react";

import styles from "./Input.module.css";

const Input = ({ type = "text", placeholder, value, name, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder ?? `Enter ${name}...`}
      value={value}
      name={name}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default Input;
