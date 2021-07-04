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
      <div className="bg">
        <img src="" alt="" />
      </div>
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
  /* .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
    filter: blur(3px);
    height: 100vh;
    width: 100%;
    background-image: url("https://images.unsplash.com/photo-1603046015506-ed6515399b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1516&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    img {
      width: 100%;
    }
  } */
`;
