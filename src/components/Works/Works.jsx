import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/Codivas.png";
import Amazon from "../../img/Microsoft.png";
import Shopify from "../../img/College-Canteen.png";
// import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked for All these
          </span>
          <span>Companies</span>
          <spane>
            Worked for Microsoft in JUne 2023 as an SDE Intern'23
            <br />
            Worked at college canteen in June 2021 
            <br />
            Founder at COdivas since December 2021
            <br />
            HUnting Opportunities to work in big Techs. 
          </spane>
          <a href="https://www.linkedin.com/in/kanak-gautam-66302a202/" target="_blank" rel="noopener noreferrer">
            <button className="button s-button">Hire Me</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          {/* <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div> */}
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          {/* <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div> */}
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
