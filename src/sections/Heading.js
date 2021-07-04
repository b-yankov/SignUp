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
    top: 1550,
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
        <div className="description">
          <p>{data.mainDescription}</p>
        </div>
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
  /* color: white; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  div {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    p {
      margin: 20px 0;
      max-width: 500px;
      text-align: center;
    }
  }

  .input {
    margin-top: 40px;
  }
  .btn {
    background: #4ea8de;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px 10px 10px;
    border-radius: 25px;
    color: #e9ecef;
    transition: all 0.5s ease-out;
    :hover {
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
