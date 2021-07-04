import React from "react";
import $ from "jquery";
import { data } from "../assets/Text.js";


export const InputComponent = ({ modal, setModal, value, setValue }) => {
  function SubmitMail(e) {
    e.preventDefault();
    setModal(!modal);

    var call = $.ajax({
      url: "https://starathletepromo.azurewebsites.net/api/Service.svc/saveform",
      method: "POST",
      headers: { "Accept": "application/json; odata=verbose", "Content-Type": "application/json" },
      async: false,
      crossDomain: true,
      data: '{ "user_email" : "' + value + '"}',
      dataType: 'json',
      success: (response) => {
        console.log("Response: " + JSON.stringify(response));
      },
    }).responseJSON;
    //console.log("Current form data: " + JSON.stringify(call));

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
