import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";

import styled from "styled-components";
import { motion } from "framer-motion";

import BgVideo from "../BgVideo.mp4";
import Play from "../assets/play.svg";

import { data } from "../assets/Text.js";

import { FullVideoModal } from "./FullVideo";

export const Video = () => {
  const [openVideo, setOpenVideo] = useState(false);

  const FullVideo = () => {
    setOpenVideo(true);
  };

  useEffect(() => {
    if (openVideo) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [openVideo]);

  return (
    <Styles className="setPadding">
      <h1 className="why">{data.videoTitle}</h1>
      <div className="video-container">
        <div className="button">
          <div className="button-bg" onClick={FullVideo}>
            <img src={Play} alt="play button" />
          </div>
          {openVideo && <FullVideoModal setOpenVideo={setOpenVideo} />}
        </div>
        <div className="videoDiv">
          <div className="color-overlay"></div>
          <video autoPlay muted loop>
            <source src={BgVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    margin-bottom: 100px;
  }
  .video-container {
    position: relative;
    width: 100%;
    max-height: 700px;
    min-height: 200px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    aspect-ratio: 16/9;
  }
  .button {
    width: 100%;
    text-align: center;
    position: absolute;
    z-index: 6;
    cursor: pointer;
    padding: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    outline: none;
    border: none;
    .button-bg {
      background-color: rgba(0, 0, 0, 0.3);
      height: 80px;
      width: 120px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease;
    }
    :hover {
      .button-bg {
        background-color: rgba(0, 0, 0, 1);
      }
    }

    img {
      width: 30px;
    }
  }

  .videoDiv {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    video {
      width: 100%;
    }
    .color-overlay {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #181818;
      width: 100%;
      height: 100%;
      opacity: 0.6;
    }
  }
`;
