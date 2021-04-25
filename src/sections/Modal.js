import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { data } from "../assets/Text.js";

import CheckIcon from "@material-ui/icons/Check";

export const Modal = ({ value, setModal }) => {
  return (
    <Styles>
      <div className="container">
        <div className="image">
          <CheckIcon />
        </div>
        <h3>
          Thank you, <br></br>
          <span>{value}!</span>
        </h3>
        <p>
          You are one of the first members in our platfor. We will be keeping
          you up to date with monthly emails.
        </p>
        <button onClick={(e) => setModal(false)}>Continue</button>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  z-index: 100001;
  padding: 10px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    max-width: 600px;
    width: 100%;
    max-height: 500px;
    background: #e9ecef;
    text-align: center;
  }
  .image {
    width: 50px;
    height: 50px;
    border-radius: 500px;
    border: 2px solid #85c441;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: #85c441;
      font-size: 32px;
    }
  }
  h3 {
    margin: 20px 0 40px 0;
    span {
      color: #85c441;
      font-size: 21px;
    }
  }
  p {
    margin-bottom: 40px;
    max-width: 400px;
  }
  @media screen and (min-width: 700px) {
    .container {
      padding: 40px;
    }
    h3 {
      span {
        font-size: 28px;
      }
    }
  }
`;
