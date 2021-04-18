import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { data } from "../assets/Text.js";

export const WhyNow = () => {
  return (
    <Styles className="setPadding">
      <h3>{data.whyNowTitle}</h3>
      <div className="reasons">
        <p>{data.reason1}</p>
        <p>{data.reason2}</p>
        <p>{data.reason3}</p>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  h3 {
    margin-bottom: 40px;
  }
  p {
    margin-top: 20px;
  }
`;
