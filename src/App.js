import "./App.css";
import React, { useReducer, useEffect } from "react";

// import "./styles.css";

// initalising state of the component
const initialState = {
  word:
    window.localStorage.getItem("word") == null
      ? ""
      : window.localStorage.getItem("word"),
};

// reducer function with updateWord and clearInput effect
function reducer(state, action) {
  switch (action.type) {
    case "updateWord":
      return { word: action.payload };
    case "clearInput":
      return { word: "" };
    default:
      return state;
  }
}

function App() {
  // intialise the reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // listens for changes in the state, when changed it updates
  // the localStorage value of word
  useEffect(() => {
    window.localStorage.setItem("word", state.word);
  }, [state.word]);

  return (
    <div className="App">
      <div className="flex">
        <form>
          <label>Input a word:</label>
          <input
            className="input flex-child"
            value={state.word}
            onChange={(e) =>
              dispatch({ type: "updateWord", payload: e.target.value })
            }
          />
        </form>

        <button
          className="flex-child"
          onClick={() => window.localStorage.clear()}
        >
          Clear localStorage
        </button>
        <button
          disabled={state.word < 1}
          className="flex-child"
          onClick={() => dispatch({ type: "clearInput" })}
        >
          Clear input
        </button>
      </div>
    </div>
  );
}

export default App;
