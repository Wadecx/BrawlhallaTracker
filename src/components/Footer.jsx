import React from 'react'
import '../Assets/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="parentFooter">

        <div className="rightFooter">
          <h1>About</h1>
          <p>Ce Site Web utilise une API Gratuite. Ce site reçois les donées uniquement via votre ID. L'ID ce trouve dans la section "INVENTAIRE" en haut à Gauche</p>
        </div>
        
        <ul>
          <a href="https://github.com/Wadecx" target='_blank'>Github</a>
          <a href="https://www.instagram.com/tyrxxn.mrl/" target='blank'>Instagram</a>
          <a href="mailto:wadecpro@gmail.com" target='blank'>Mail</a>
        </ul>
      </div>
    </footer>
  )
}

export default Footer