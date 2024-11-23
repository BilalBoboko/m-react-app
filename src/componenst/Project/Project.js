import React from 'react'
import krestiki from '../../img//projects/krestiki i noliki.png'
import './style.css'
const Project01 = () => {
  return (
    <div>
              <li className="project">
                <a href="https://github.com/BilalBoboko/Rock-Paper-Scizzor.git">
                  <img
                    src={krestiki}
                    alt="Project img"
                    className="project__img"
                  />
                  <h3 className="project__title">Krestiki i noliki</h3>
                </a>
              </li>
    </div>
  )
}

export default Project01;

              