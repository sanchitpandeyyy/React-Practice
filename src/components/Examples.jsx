import React, { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title={"Examples"} id="examples">
      <Tabs buttons={
        <>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </TabButton>
        </>
      }>
        </Tabs>
      <menu>
        
      </menu>

      {!selectedTopic ? (
        <p> Please! Select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>{EXAMPLES[selectedTopic].code}</pre>
        </div>
      )}
    </Section>
  );
};

export default Examples;
