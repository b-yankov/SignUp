import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import Logo from "../assets/Logo.png";
import { data } from "../assets/Text.js";

export const Header = () => {
  return (
    <Styles className="setPadding">
      <div className="logo">
        <img src={Logo} alt="our logo" />
        <h5>{data.logoLabel}</h5>
      </div>
      <button>{data.buttonNav}</button>
      
    </Styles>
  );
};

const Styles = styled(motion.div)`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      margin-right: 10px;
    }
  }
`;
