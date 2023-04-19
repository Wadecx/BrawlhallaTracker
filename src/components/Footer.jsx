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
          <a href="">Github</a>
          <a href="">Instagram</a>
          <a href="">Mail</a>
        </ul>
      </div>
    </footer>
  )
}

export default Footer