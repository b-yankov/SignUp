import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { Header } from "./sections/Header";
import { Heading } from "./sections/Heading";
import { Video } from "./sections/Video";
import { Usp } from "./sections/Usp";
import { BigCta } from "./sections/BigCta";
import { WhyNow } from "./sections/WhyNow";
import { Footer } from "./sections/Footer";

export const HomePage = () => {
  return (
    <Styles>
      <div className="content">
        <Header />
        <Heading />
        <Video />
        <Usp />
        <BigCta />
        <WhyNow />
      </div>
      <Footer />
    </Styles>
  );
};

const Styles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    max-width: 1200px;
  }
`;
