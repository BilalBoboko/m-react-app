import React from 'react'
import vk from "../../img/icons/vk.svg"
import gh from "../../img/icons/gitHub.svg"
import inst from "../../img/icons/instagram.svg"
import twitt from "../../img/icons/twitter.svg"





const Footer = () => {
  return (
    <div>
      <footer className="footer">
         <div className="container">
           <div className="footer__wrapper">
             <ul className="social">

               <li className="social__item">
                 <a href="https://vk.com/id819148764">
                   <img src={vk} alt="Link" />
                 </a>
               </li>

               <li className="social__item">
                 <a href="https://www.instagram.com/">
                   <img src={inst} alt="Link" />
                 </a>
               </li>

               <li className="social__item">
                 <a href="https://x.com/?lang=ru">
                   <img src={twitt} alt="Link" />
                 </a>
               </li>

               <li className="social__item">
                 <a href="https://github.com/BilalBoboko">
                   <img src={gh} alt="Link" />
                 </a>
               </li>
            
             </ul>
             <div className="copyright">
               <p>© 2024 frontend-Bilal-dev.com</p>
             </div>
           </div>
         </div>
        </footer>

    </div>
  )
}

export default Footer;
