import logo from './logo.svg';
import './App.css';
import React from "react";

const edu = ["Red Swastika School", "Temasek Secondary School", "Raffles Institution", "NUS Computing - Computer Science & Data Science"];
function simpleComponent() {
  return <nav className="site-navigation"> 
  <span>
  Test Navigation 
  </span>
  <ul>
      {
          edu.map((link, index) => 
          <li key={index}> 
          {link}
          </li>
          )
      }
  </ul>
  </nav> 
// return (
//     <ul>
//     edu.map((x, id) =>  
//         <li key={id}>{x}</li>
//     )      
//     </ul>
//   );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <simpleComponent>hihihihihihihi</simpleComponent>
      </header>
    </div>
  );
}

export default App;
