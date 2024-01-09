import React from 'react';
import ReactImg from "../assets/react-core-concepts.png"
const reactDescriptions=['Fundamentals','Crucial','Core']

function getRandom(text){
  return Math.floor(Math.random()*(text + 1));
}

 const Header = ()=>{
    return(
      <header>
      <img src={ReactImg
      } alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandom(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
   
    </header>
    );
  }
export default Header;


