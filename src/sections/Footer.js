import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { data } from "../assets/Text.js";

import FB from "../assets/fbLogo.png";
import IG from "../assets/igLogo.png";

export const Footer = () => {
  return (
    <Styles className="setPadding">
      <div className="heading">
        <h6>{data.feedback}</h6>
        <span>{data.subText}</span>
        <p>{data.email}</p>
        <div className="logos">
          <img src={FB} alt="facebook" />
          <img src={IG} alt="instagram" />
        </div>
      </div>

      <div className="foot">
        <div className="line"></div>
        <div className="rights">
          <div>&copy; 2021</div>
          <div>All rights reserved</div>
        </div>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  height: 300px;
  width: 100%;
  background: #1f1f1f;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;

  .heading {
    text-align: center;
    span {
      font-size: 14px;
      color: #d8d8d8;
    }
    p {
      margin-top: 20px;
      font-size: 28px;
      font-weight: 700;
    }
  }
  .logos {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      cursor: pointer;
      width: 30px;
      :first-child {
        margin-right: 15px;
      }
    }
  }
  .foot {
    .rights {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #b1b1b1;
    }
    .line {
      height: 1px;
      width: 100%;
      background: #b1b1b1;
      margin-bottom: 8px;
    }
  }
`;
