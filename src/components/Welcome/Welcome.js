import React from "react";
import "../../styles/Welcome.scss";

const welcomeText = ["W", "e", "l", "c", "o", "m", "e", ":)"];

const listWord = welcomeText.map((word, index) => {
  return (
    <span key={index} className={"word-" + index}>
      {word}
    </span>
  );
});

const listBackground = [];
const listBall = [];
const lishParticle = [];
const listParticleSmall = [];
for (let index = 0; index < 12; index++) {
  listParticleSmall.push(<div className={"particle-small-" + index}></div>);
}
welcomeText.forEach((value, index) => {
  listBackground.push(
    <div key={index} className={"background-" + index}></div>
  );
  listBall.push(<div key={index} className={"ball-" + index}></div>);
  lishParticle.push(
    <div key={index} className={"particle-" + index}>
      {listParticleSmall}
    </div>
  );
});
const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="background">{listBackground}</div>
      <div className="welcome-text">{listWord}</div>
      <div className="balls">{listBall}</div>
      <div className="particles">{lishParticle}</div>
    </div>
  );
};

export default Welcome;
