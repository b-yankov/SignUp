import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import Logo from "../assets/Logo.png";
import { data } from "../assets/Text.js";

function ScrowToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}
//Go to enter your email section
function ScrowToCTA() {
  window.scroll({
    top: 2250,
    behavior: "smooth",
  });
}

export const Header = () => {
  return (
    <Styles className="setPadding">
      <div className="wholeNav">
        <div className="logo" onClick={ScrowToTop}>
          <img src={Logo} alt="our logo" />
          <h5>{data.logoLabel}</h5>
        </div>
        <button id="header-button" onClick={ScrowToCTA}>
          {data.buttonNav}
        </button>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  padding-top: 10px;
  padding-bottom: 0;
  z-index: 10;
  background: rgba(206, 212, 218, 0.55);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  max-width: 1400px;
  width: 100%;

  .wholeNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
  }
  #header-button {
    width: 160px;
  }
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 40px;
      margin-right: 10px;
    }
  }
`;
