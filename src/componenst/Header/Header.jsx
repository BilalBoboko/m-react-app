  import React from 'react'
  import "./style.css"
  import video from "../../video/video.mp4"
  const Header = () => {
    return (
      <div>
        <header className="header">
          <video className="video" src={video} autoPlay loop muted />
            <div className="header__wrapper">
              <h1 className="header__title">
                <strong>
                  Hi, my name is <em>Bilal</em>
                </strong>
                <br />a frontend developer
              </h1>
              <div className="header__text">
                <p>with passion for learning and creating.</p>
              </div>
              <a href="#!" className="btn">
                Download CV
              </a>
            </div>
          </header>


      </div>
    )
  }

  export default Header
