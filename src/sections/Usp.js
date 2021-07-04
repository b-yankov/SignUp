import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { data } from "../assets/Text.js";
import Connecting from "../assets/connecting.png";
import Searching from "../assets/searching.png";
import Showcase from "../assets/showcase.png";

export const Usp = () => {
  return (
    <Styles className="setPadding">
      <div className="usps ">
        <div className="usp">
          <div className="text">
            <h3>{data.uspTitle1}</h3>
            <p>{data.uspeDescription1}</p>
          </div>
          <img src={Connecting} alt="map" />
        </div>
        <div className="usp">
          <img src={Showcase} alt="map" />
          <div className="text">
            <h3>{data.uspTitle2}</h3>
            <p>{data.uspeDescription2}</p>
          </div>
        </div>
        <div className="usp">
          <div className="text">
            <h3>{data.uspTitle3}</h3>
            <p>{data.uspeDescription3}</p>
          </div>
          <img src={Searching} alt="map" />
        </div>
      </div>
    </Styles>
  );
};

const Styles = styled(motion.div)`
  margin-top: 60px;
  .usp {
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      max-width: 500px;
      padding: 60px;
    }
    p {
      margin-top: 20px;
      max-width: 500px;
    }
    h3 {
      max-width: 580px;
    }
    :last-child {
      margin-bottom: 0px;
    }
  }
`;
