import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import BgVideo from "./BgVideo.mp4";
import Play from "./assets/play.svg";
import Share from "./assets/share.png";
import Logo from "./assets/Logo.png";

export const TeamUp = () => {
  return (
    <TeamUpStyles>
      <div className="content">
        <div className="header">
          <div className="head">
            <div className="title">
              <img src={Logo} alt="" />
              <h1>Star Athlete</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium eveniet quos architecto ipsam atque quae obcaecati
              accusantium repudiandae nisi optio laboriosam quidem, doloribus
              sunt suscipit quod fugiat eligendi commodi voluptatem!
            </p>
          </div>
          <div className="input">
            <input type="text" placeholder="Enter your email" />
            <button>Join now</button>
          </div>
        </div>
        <div className="video-container">
          <div className="button">
            <img src={Play} alt="play button" />
          </div>
          <div className="videoDiv">
            <div className="color-overlay"></div>
            <video autoPlay muted loop>
              <source src={BgVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="usp">
          <div className="text">
            <h2>USP</h2>
            <h3>Learnings and practices from top players</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              libero ipsam quo eveniet error ad dolores facilis, magnam fuga
              distinctio.
            </p>
            <h3>Opportunity to find the best team</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              libero ipsam quo eveniet error ad dolores facilis, magnam fuga
              distinctio.
            </p>
            <h3>Or to be found by the best scout</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              libero ipsam quo eveniet error ad dolores facilis, magnam fuga
              distinctio.
            </p>
          </div>
          <div className="image">
            <img
              src="https://image.freepik.com/free-vector/soccer-abstract-concept-vector-illustration-team-sport-play-ball-professional-world-championship-sport-game-player-uniform-soccer-stadium-winner-cup-grass-field-match-abstract-metaphor_335657-4271.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="footer">
          <h1>Be the first to sign up!</h1>
          <div className="line"></div>

          <div className="input">
            <input type="text" placeholder="Enter your email" />
            <button>Join now</button>
            <div className="share">
              <img src={Share} alt="share button" />
            </div>
          </div>

          <img src="Logo" alt="" />
        </div>
        <div className="why">
          <h2>Why sign up now?</h2>
          <div className="whyNow">
            <div className="reason">
              <h3>Add here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident, est quae culpa explicabo soluta tempora voluptas.
              </p>
            </div>
            <div className="reason">
              <h3>Add here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident, est quae culpa explicabo soluta tempora voluptas.
              </p>
            </div>
            <div className="reason">
              <h3>Add here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident, est quae culpa explicabo soluta tempora voluptas.
              </p>
            </div>
          </div>
        </div>

        <div className="extraFooter"></div>
      </div>
    </TeamUpStyles>
  );
};

const TeamUpStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    padding: 40px;
    max-width: 1300px;
  }

  //Heading
  .header {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .head {
      margin-right: 40px;
    }

    .title {
      margin-left: -20px;
      display: flex;
      align-items: center;
      img {
        margin-right: 15px;
        width: 70px;
      }
      h1 {
        letter-spacing: 5px;
      }
    }

    p {
      margin-top: 30px;
      margin-bottom: 50px;
      max-width: 700px;
    }
    .input {
      input {
        width: 300px;
      }
    }
    button {
      height: 50px;
      padding: 10px !important;
    }
  }

  .video-container {
    position: relative;
    max-height: 787.5px;
    height: 700px;
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .button {
      text-align: center;
      z-index: 1;
      cursor: pointer;
      padding: 30px;
      width: 110px;
      border-radius: 20px;
      outline: none;
      border: none;
      background: rgba(255, 255, 255, 0.4);
      img {
        width: 30px;
      }
    }

    .videoDiv {
      position: absolute;
      top: -4px;
      left: -4px;
      max-height: 787.5px;
      width: 100vw;

      .color-overlay {
        position: absolute;
        top: 4px;
        left: 4px;
        background-color: #181818;
        width: 100%;
        height: 90vh;
        opacity: 0.6;
      }
      video {
        width: 1300px;
        max-height: 787.5px;
      }
    }
  }

  //Usp
  .usp {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .text {
      width: 30vw;
      h3 {
        margin-top: 30px;
        font-weight: 500;
      }
    }

    .image {
      width: 25vw;
      img {
        max-width: 100%;
        border-radius: 30px;
      }
    }
  }

  .why {
    width: 100%;
    margin-top: 120px;
    .whyNow {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      p {
        width: 350px;
      }
      h3 {
        margin-top: 30px;
        color: white;
        font-weight: 500;
      }
    }
  }
  //Footer
  .footer {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-family: "Source Code Pro", monospace;
      font-size: 45px;
      z-index: 2;
    }
    .line {
      width: 600px;
      height: 20px;
      background: rgb(142, 119, 237, 0.6);
      margin-left: 110px;
      border-radius: 2px;
      margin-top: -22px;
    }
  }
  .input {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    input,
    button {
      font-size: 16px;
      outline: none;
      border: none;
      border-radius: 5px;
      padding: 15px;
    }
    button {
      cursor: pointer;
      background: #85c441;
      color: white;
      font-weight: 700;
    }
    input {
      margin-right: 30px;
      width: 520px;
      background: #dbdbdb;
      color: #2f2f2f;
      font-weight: 700;
      ::placeholder {
        color: #2f2f2f;
      }
    }
    .share {
      background: #2f2f2f;
      padding: 8px;
      margin: 10px;
      border-radius: 5px;
      margin-left: 20px;
      cursor: pointer;
    }
  }
  .extraFooter {
    height: 100px;
  }
`;
