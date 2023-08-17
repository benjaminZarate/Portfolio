import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';

import {React, useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const readToken = "e34de55faf52aa5e768679aaab68d4f0c0c97a36";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get(`https://api.buttercms.com/v2/pages/portfolio_benjamin_zarate/portfolio-benjamin-zarate/?auth_token=${readToken}`).then(res => {
        setData(res.data.data.fields.personal_portfolio)
      }).catch(err => {
        console.log(err);
      })
    }
    getData();
  }, []);

  return (
    <div>
      <Navbar/>
      <Home content={data[0]}/>
      <About content={data[1]}/>
      <Skills content={data[2]}/>
      <Works content={data[3]}/>
      <Contact/>
    </div>
  );
}

export default App;
