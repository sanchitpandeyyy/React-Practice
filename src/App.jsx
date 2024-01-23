import "./App.css";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import { useState } from 'react';
import Form from './components/Form.jsx'

function App() {


  return (
    <div className="">
      <Header />
      <main>
        <CoreConcepts />
        <Examples/>
        <Form/>
      </main>
    </div>
  );
}

export default App;
