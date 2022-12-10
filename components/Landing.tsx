import React from "react";
import Image from "next/image";
import LOGO from "../public/ortsero.png";

function Landing() {
  return (
    <div className="landing-page">
      <div className="heading">
        <div className="logo">
          <Image src={LOGO} alt="idk man"/>
        </div>
        <div className="title">
          <h1>Ortsero</h1>
          <button className="offset">Invite to Discord</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
