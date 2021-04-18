import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { data } from "../assets/Text.js";

export const BigCta = () => {
  return (
    <Styles className="setPadding">
      <h1>{data.bigCtaTitle}</h1>
      <div className="input">
        <input type="text" placeholder={data.placeholder} />
        <button>{data.buttonLabel}</button>
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
`;
