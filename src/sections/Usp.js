import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { data } from "../assets/Text.js";

export const Usp = () => {
  return (
    <Styles className="setPadding">
      <div className="usps ">
        <div className="usp">
          <h3>{data.uspTitle1}</h3>
          <p>{data.uspeDescription1}</p>
        </div>
        <div className="usp">
          <h3>{data.uspTitle2}</h3>
          <p>{data.uspeDescription2}</p>
        </div>
        <div className="usp">
          <h3>{data.uspTitle3}</h3>
          <p>{data.uspeDescription3}</p>
        </div>
      </div>
      <img src="" alt="" />
    </Styles>
  );
};

const Styles = styled(motion.div)`
  margin-top: 60px;
  .usp {
    margin-bottom: 40px;
    p {
      margin-top: 20px;
    }
    :last-child {
      margin-bottom: 0px;
    }
  }
`;
