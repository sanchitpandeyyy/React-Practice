import "./App.css";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from 'react';
import {EXAMPLES} from './data.js'

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();
  

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div className="">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=> (<CoreConcept key={item.title} {...item}/>
             ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic ==='components'} onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic ==='jsx'} onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic ==='props'} onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic ==='state'} onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          
            { !selectedTopic ? ( <p> Please! Select a topic</p> ) : ( 
            <div id="tab-content"> 
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>{EXAMPLES[selectedTopic].code}</pre>
          </div>
          )}
            
         
        </section>
        
      </main>
    </div>
  );
}

export default App;
