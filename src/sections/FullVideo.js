import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import BgVideo from "../BgVideo.mp4";

import CloseIcon from "@material-ui/icons/Close";

export const FullVideoModal = ({ setOpenVideo }) => {
  const CloseModal = () => {
    setOpenVideo(false);
  };
  return (
    <Styles>
      <div className="container">
        <div className="close" onClick={CloseModal}>
          <CloseIcon />
        </div>
        <video controls autoPlay>
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  z-index: 100004;
  padding: 20px;
  .container {
    padding: 20px;
    max-width: 1400px;
    max-height: 1000px;
    background: #e9ecef;
  }
  video {
    width: 100%;
    height: 100%;
    outline: none;
  }
  .close {
    float: right;
  }
`;
