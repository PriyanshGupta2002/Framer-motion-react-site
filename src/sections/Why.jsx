import React from "react";
import { GoPlay } from "react-icons/go";
import Title from "../components/Title";
import "../styles/sections/Why.scss";
import {motion} from 'framer-motion'
import {topContainerAnimation,videoAnimation,reasonAnimation} from '../animations'
import { useScroll } from "../components/UseScroll";
const Why = () => {
  const [element,controls]=useScroll()
  return (
    <div className="whyContainer" id="services" ref={element}>
      <div className="container">
        <motion.div className="top" variants={topContainerAnimation} animate={controls} transition={{delay:0.2,type:"spring"}}>
          <Title title="Why CRYO?" color="pink" lineCenter={true} />
          <div className="subTitle">
            <p>
              Always stay updated with the technologies thus we help our clients
              by giving the best solutions for their needs
            </p>
          </div>
        </motion.div>
        <div className="content">
          <div className="">
            <motion.div className="video" variants={videoAnimation} animate={controls} transition={{delay:0.2,type:"spring",stiffness:"200"}}>
              <GoPlay />
            </motion.div>
          </div>
          <motion.div className="reasons" variants={reasonAnimation} animate={controls} transition={{delay:0.2,type:"spring",stiffness:"200"}}>
            <ul>
              <li>Over 10+ years of industry wide experience</li>
              <li>
                Provide solutions to our multiple global clients or website
                traffic generation and workflow
              </li>
              <li>Strong team of 150+ creative people</li>
              <li>99% adhere to service level contract</li>
              <li>Ready to receive service request 24/7</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Why;
