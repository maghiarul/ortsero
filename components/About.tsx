import React from "react";
import Image from "next/image";
import fun from "../public/fun.png";
import general from "../public/general.png";
import moderation from "../public/moderation.png";
import owner from "../public/owner.png";
import stats from "../public/stats.png";

function About() {
  return (
    <div className="about-page">
      <div className="about-heading">
        <h1>Why Ortsero?</h1>
        <hr></hr>
      </div>
      <div className="why">
        <div className="fun">
          <div className="nush">
            <h2>Fun</h2>
            <li>asdasdsad</li>
            <li>asdasdsad</li>
            <li>asdasdsad</li>
          </div>
          <Image src={fun} alt="fun" />
        </div>
        <hr></hr>
        <div className="fun">
          <div className="nush">
            <h2>Fun</h2>
            <li>asdasdsad</li>
            <li>asdasdsad</li>
            <li>asdasdsad</li>
          </div>
          <Image src={fun} alt="fudddadadadn" />
        </div>
        <hr></hr>
        <div className="fun">
          <div className="nush">
            <h2>Fun</h2>
            <li>asdasdsad</li>
            <li>asdasdsad</li>
            <li>asdasdsad</li>
          </div>
          <Image src={fun} alt="dd" />
        </div>
        <hr></hr>
        <div className="fun">
          <div className="nush">
            <h2>Fun</h2>
            <li>asdasdsad</li>
            <li>asdasdsad</li>
            <li>asdasdsad</li>
          </div>
          <Image src={owner} alt="fuasdn" />
        </div>
        <hr></hr>
        <div className="fun">
          <div className="nush">
            <h2>Fun</h2>
            <li>asdasdsad</li>
            <li>asdasdsad</li>
            <li>asdasdsad</li>
          </div>
          <Image src={stats} alt="fuddadn" />
        </div>
      </div>
    </div>
  );
}

export default About;
