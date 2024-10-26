import React, { useState } from "react";
import styles from './ToyRobotSimulator.module.css';
import { executeCommand } from "../../utils/simulatorLogic";
import { initialState } from "../../utils/constants";
import Header from "../common/Header";

function ToyRobotSimulator() {
  const [commands, setCommands] = useState("");
  const [state, setState] = useState({...initialState});

  const handleRunCommands = () => {
    const commandList = commands.split("\n");

    let currentState = { ...state };

    commandList.forEach(command => {
      currentState = executeCommand(currentState, command);
    });
    setState(currentState);
  };

  return (
    <div>
      <Header></Header>
      <div className={styles.textArea}>
      <textarea 
        rows="10" 
        cols="50" 
        value={commands} 
        onChange={(e) => setCommands(e.target.value)}
        placeholder="Enter commands here..." 
      />
      <button onClick={handleRunCommands}>Run</button>
      {state.report && (
        <p>{state.report}</p>
      )}
      </div>
    </div>
  );
}

export default ToyRobotSimulator;