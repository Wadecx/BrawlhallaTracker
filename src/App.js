import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searcher from './components/Searcher';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [Username, setUsername] = useState('');

  return (
    <>
      <Navbar setUsername={setUsername}/>
      <Searcher Username={Username} setUsername={setUsername}/>
      <Footer/>
    </>
  );
}

export default App;
