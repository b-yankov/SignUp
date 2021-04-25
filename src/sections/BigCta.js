import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { data } from "../assets/Text.js";

import { InputComponent } from "./InputComponent";

export const BigCta = ({ value, setValue, modal, setModal }) => {
  return (
    <Styles className="setPadding">
      <h1>{data.bigCtaTitle}</h1>
      <div className="input">
        <InputComponent
          modal={modal}
          setModal={setModal}
          value={value}
          setValue={setValue}
        />
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  h1 {
    text-align: center;
  }

  .input {
    margin-top: 30px;
  }
  @media screen and (min-width: 1023px) {
    margin: 100px 0;
  } ;
`;
