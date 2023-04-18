import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searcher from './components/Searcher';
import { useState } from 'react';

function App() {
  const [Username, setUsername] = useState('5138590');

  return (
    <>
      <Navbar setUsername={setUsername}/>
      <Searcher Username={Username}/>
    </>
  );
}

export default App;
