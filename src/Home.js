import React from "react";

import { useState } from "react";
import {Outlet, useNavigate } from "react-router-dom";

export default function Home() {
  document.title = "Sunday famous portfolio";

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, SetLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState("");

  const navigate = useNavigate();
  return (
    <main className="home-top-container">
      <div className="home-container">
        <div className="name-wrap">
          <div className="name">
            <h1>Famous</h1>
            <h1>Sunday</h1>
          </div>
          <h4> Github Portfolio</h4>
        </div>

        <h2> Hello,</h2>
        <p className="home-tex">
          I'm a Software Engineer, Content Creator, and a Science
          tutor(Mathematics Physics and Chemistry). I am currently a Mathematics
          teacher at Sedco Secondary School Enerhen, Warri. I'm passionate about
          any thing I do. I have build some useful web Applications and
          Contributed to open source some of my web projects can be found and
          access through my repository page and also check out my profile on
          github.
        </p>
        <div className="home-btn-wrap">
          <button
            className="home-btn"
            onClick={() => {
              navigate("/repository");
            }}
          >
            Repository
          </button>
          <button
            className="home-btn-profile"
            onClick={() => {
              window.open("https://github.com/kperusi");
            }}
          >
            Portfolio
          </button>
        </div>

        <div className="home-image-wrap">
          <div className="home-image-background"></div>
        </div>
      </div>

      <div className="home-right">
        <div className="home-box1">
          <h1>Technologies</h1>
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Java</li>
            <li>Android</li>
            <li>Vercel Hosting</li>
            <li>Netlify Hosting</li>
            <li>React</li>
            <li>Git and Github</li>
          </ul>
        </div>

        <div className="home-box2">
          <h1>Calculator App</h1>
          <div className="home-box2-image"></div>
        </div>

        <div className="home-box3">
          <h1>Ip Locator App</h1>
          <div>
            
          </div>
        </div>

      </div>

      <Outlet />
    </main>
  );
}
