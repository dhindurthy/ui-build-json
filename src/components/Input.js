import React from "react";

function Input(props) {
  return (
    <section className="field">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.inputValue}
        onChange={props.onChange}
        onBlur={props.onBlur}
        autoComplete={"off"}
        aria-invalid={props.ariaInvalid}
        aria-controls="errMsg"
        aria-describedby="errMsg"
      />
      <div
        className="error-message"
        id="errMsg"
        aria-live="assertive"
        aria-atomic="true"
      >
        {props.isError}
      </div>
    </section>
  );
}
export default Input;
