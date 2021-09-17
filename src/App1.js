import "./App.css";
import React, { useState, useEffect } from "react";

// import "./styles.css";

// initalising state of the component
const initialState = {
  word1:
    window.localStorage.getItem("word1") == null
      ? ""
      : window.localStorage.getItem("word1"),
};

// reducer function with updateWord and clearInput effect

function App1() {
  // intialise the reducer
  const [state, setState] = useState(initialState);

  // listens for changes in the state, when changed it updates
  // the localStorage value of word
  useEffect(() => {
    window.localStorage.setItem("word1", state.word1);
  }, [state.word1]);

  return (
    <div className="App">
      <div className="flex">
        <form>
          <label>Input a word:</label>
          <input
            className="input flex-child"
            value={state.word1}
            onChange={(e) => setState({ word1: e.target.value })}
          />
        </form>

        <button
          className="flex-child"
          onClick={() => window.localStorage.clear()}
        >
          Clear localStorage
        </button>
        <button
          disabled={state.word1 < 1}
          className="flex-child"
          onClick={() => setState({ word1: "" })}
        >
          Clear input
        </button>
      </div>
    </div>
  );
}

export default App1;
