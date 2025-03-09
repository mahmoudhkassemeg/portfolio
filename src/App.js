import "./App.css";
import React from "react";
import Menu from "./Menu/Menu";
import Homeimg from "./Components/Homeimg/Homeimg.js";
import Card1 from './Components/Cards/Card1.js'
import Card2 from './Components/Cards/Card2.js'
import Card3 from './Components/Cards/Card3.js'
//Cards functions
function Cardone(props){

}

function Cardtwo(props){

}

function Cardthree(props){

}

function Home() {
  
  return (
    
    <div>
      
      <header>
        <div className="headermain">
          <div className="logoName">
            <a href="#Home"> Mahmoud <span>Hassan</span></a>
          </div>

          <Menu />
        </div>
      </header>

      <section className="home" id="Home">
        <Homeimg />
      </section>

      <section className="services" id="services">
          
          <Card1 />
          <Card2 />
          <Card3 />

      </section>

      </div>
  );
}
export default Home;
