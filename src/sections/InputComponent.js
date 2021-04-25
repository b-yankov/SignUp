import React, { useState } from "react";

import { data } from "../assets/Text.js";

export const InputComponent = ({ modal, setModal, value, setValue }) => {
  function SubmitMail(e) {
    e.preventDefault();
    setModal(!modal);
  }
  return (
    <form className="input" onSubmit={SubmitMail}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="email"
        required
        placeholder={data.placeholder}
      />
      <button>{data.buttonLabel}</button>
    </form>
  );
};
