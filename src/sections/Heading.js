import React from "react";

import { data } from "../assets/Text.js";

import styled from "styled-components";
import { motion } from "framer-motion";

import { InputComponent } from "./InputComponent";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import { useMediaQuery } from "react-responsive";

function ScrollDownWeb() {
  window.scroll({
    top: 850,
    behavior: "smooth",
  });
}
function ScrollDownApp() {
  window.scroll({
    top: 800,
    behavior: "smooth",
  });
}
export const Heading = ({ modal, setModal, value, setValue }) => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)",
  });
  return (
    <Styles className="setPadding">
      <div>
        <h1>{data.mainTitle}</h1>
        <p>{data.mainDescription}</p>
        <div className="input">
          <InputComponent
            modal={modal}
            setModal={setModal}
            value={value}
            setValue={setValue}
          />
        </div>
      </div>
      <div className="btn" onClick={isMobile ? ScrollDownApp : ScrollDownWeb}>
        <PlayArrowIcon />
        <span>{data.watchBtn}</span>
      </div>
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
    max-width: 600px;
  }
  .input {
    margin-top: 40px;
  }
  .btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid #e9ecef;
    transition: all 0.5s ease-out;
    :hover {
      border: 2px solid #85c441;
      svg {
        transform: rotate(90deg);
      }
    }
    svg {
      font-size: 28px;
      transition: all 0.3s ease-out;
    }
    span {
      margin-left: 10px;
    }
  }
`;
