import React from 'react'
import roulette from '../../img/projects/roulette.png'
import './style.css'
const Project01 = () => {
  return (
    <div>
             <li className="project">
                <a href="https://github.com/BilalBoboko/Roulette.git">
                  <img
                    src={roulette}
                    alt="Project img"
                    className="project__img"
                  />
                  <h3 className="project__title">Roulette</h3>
                </a>
              </li>


    </div>
  )
}

export default Project01;
