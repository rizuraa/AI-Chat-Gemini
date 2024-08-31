import React, { useState } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  // const test = async () => {
  //   await fetch("http://localhost:3000/api/test", {
  //     credentials: "include",
  //   });
  // };

  return (
    <div className="homepage">
      <img
        src="/orbital.png"
        alt=""
        className="orbital"
      />
      <div className="left">
        <h1>AI Chat with Gemini</h1>
        <h2>boost your creativity and productivity</h2>
        <h3>Chat GPT looks like with Gemini AI, enjoy it</h3>
        <Link to="/dashboard">Get Started</Link>
        {/* <button onClick={test}>test auth</button> */}
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img
            src="/bot.png"
            alt=""
            className="bot"
          />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human:We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              omitDeletionAnimation={true}
              cursor={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
