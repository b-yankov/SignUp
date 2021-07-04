import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { data } from "../assets/Text.js";

import Premium from "../assets/premium.png";
import Searches from "../assets/searches.png";
import Updated from "../assets/updated.png";

export const WhyNow = () => {
  return (
    <Styles className="setPadding">
      <h3>{data.whyNowTitle}</h3>
      <div className="reasons">
        <div className="why">
          <img src={Premium} alt="medal" />
          <p>{data.reason1}</p>
        </div>
        <div className="why">
          <img src={Updated} alt="" />

          <p>{data.reason2}</p>
        </div>
        <div className="why">
          <img src={Searches} alt="" />
          <p>{data.reason3}</p>
        </div>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  .reasons {
    margin-top:40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }
  .why {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 100px;
    }
  }
  p {
    margin-top: 20px;
    text-align: center;
  }
`;
