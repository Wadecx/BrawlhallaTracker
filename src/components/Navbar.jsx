import React from 'react'
import { useState } from 'react'
import '../Assets/Navbar.css'


const Navbar = (props) => {

  const [formUsername, setFormUsername] = useState('');

  const handleSend = (e) =>
  {
    e.preventDefault();
    props.setUsername(formUsername);
  }
  
  return (
    <header>
        <div className="navbar">
            <div className="leftNav">
                <img src="https://upload.wikimedia.org/wikipedia/fr/6/60/Brawlhalla_logo.png" alt="Brawlhalla logo" />
            </div>
            <div className="rightNav">
              <form onSubmit={handleSend}>
              <input type="number" name="player" id="player" placeholder='Player ID' onChange={e => setFormUsername(e.target.value)} />
              <input type="submit" name="player" id="player" value='Search' />
              </form>
            </div>
        </div>
    </header>
  )
}

export default Navbar