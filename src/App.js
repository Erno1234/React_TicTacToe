import { useState } from "react";
import "./App.css"
//import React, {useState} from "react";
import Jatekter from "./komponens/Jatekter";
import TicTacToeModel from "./model/TacTacToeModel.js";
const tmodel = new TicTacToeModel();
function App() {
  const [lista, setLista]=useState([...tmodel.getLista()]);
  function kattintasKezelo(index){
    tmodel.setLista(index);
    setLista([...tmodel.getLista()])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
        <div className="jatekter">
           <Jatekter kattintasKezelo={kattintasKezelo} lista={lista}/>    
        </div>
      </article>
      <footer>
        <p>Pálóci Ernő</p>
      </footer>
    </div>
  );
}

export default App;
