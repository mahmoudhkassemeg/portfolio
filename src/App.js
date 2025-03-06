import './App.css'
import React from "react";
import Headernav from './Headernav/Headernav.js';
import Menu from './Menu/Menu'
import Homeimg from './Components/Homeimg/Homeimg.js';
function Home(){
  return(
    <body>
    <header>
      <div className='headermain'>
        
       <div className='logoName'><a>Mahmoud <span>Hassan</span></a></div>
      
      <Menu />
      </div>
    </header>

    <section className='home'>
      <Homeimg />
    </section>

    
    </body>
  )
} export default Home;