import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { Header } from "./sections/Header";
import { Heading } from "./sections/Heading";
import { Video } from "./sections/Video";
import { Usp } from "./sections/Usp";
import { BigCta } from "./sections/BigCta";
import { WhyNow } from "./sections/WhyNow";
import { Footer } from "./sections/Footer";

import { Modal } from "./sections/Modal";

export const HomePage = () => {
  //understand when to open the component for successful registration
  const [modal, setModal] = useState(false);
  //get the value from the input
  const [value, setValue] = useState("");

  useEffect(() => {
    if (modal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [modal]);
  return (
    <Styles>
      {modal && <Modal value={value} setModal={setModal} />}
      <Header />
      <div className="content ">
        <Heading
          modal={modal}
          setModal={setModal}
          value={value}
          setValue={setValue}
        />
        <Video />
        <Usp />
        <BigCta
          modal={modal}
          setModal={setModal}
          value={value}
          setValue={setValue}
        />
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
