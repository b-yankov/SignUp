import React from "react";

import { data } from "../assets/Text.js";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Heading = () => {
  return (
    <Styles className="setPadding">
      <div>
        <h1>{data.mainTitle}</h1>
        <p>{data.mainDescription}</p>
        <div className="input">
          <input type="text" placeholder={data.placeholder} />
          <button>{data.buttonLabel}</button>
        </div>
      </div>
      <span>{data.watchBtn}</span>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  p {
    margin: 20px 0;
  }
  .input {
    margin-top: 40px;
  }
  span {
    margin-top: 40px;
  }
`;
