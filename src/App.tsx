import React, { useEffect, useRef, useState } from "react";
import "./App.scss";

function App() {
  const inputElemSelection = useRef<HTMLUListElement>(null);
  const inputElemOutput = useRef<HTMLUListElement>(null);
  const [selectionEdit, setSelectionEdit] = useState(false);

  function handlekeyPressSelection(event: any) {
    if (event.key === "Backspace") {
      if (inputElemSelection.current) {
        if (
          inputElemSelection.current.innerHTML === "<li></li>" ||
          inputElemSelection.current.innerHTML === "<li><br></li>"
        )
          event.preventDefault();
      }
    }
  }

  function handlekeyPressOutput(event: any) {
    if (event.key === "Backspace") {
      if (inputElemOutput.current) {
        if (
          inputElemOutput.current.innerHTML === "<li></li>" ||
          inputElemOutput.current.innerHTML === "<li><br></li>"
        )
          event.preventDefault();
      }
    }
  }

  function handleClick(event: any) {
    if(!selectionEdit){
      if (inputElemOutput.current) {
        if(event.target.tagName === "LI"){
          let listElem = document.createElement("li");
          listElem.innerHTML = event.target.innerHTML;
          inputElemOutput.current.appendChild(listElem);
        }
      }
    }
  }


  return (
    <div className="App">
      <div className="section">
        <header>
          <h3>Selection</h3>
          {!selectionEdit ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              onClick={() => setSelectionEdit(!selectionEdit)}
            >
              <path
                fill="currentColor"
                d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              onClick={() => setSelectionEdit(!selectionEdit)}
            >
              <path
                fill="currentColor"
                d="M9 17.2l-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z"
              ></path>
            </svg>
          )}
        </header>
        <ul
          className="input"
          contentEditable={selectionEdit}
          spellCheck
          dir="ltr"
          id="input"
          ref={inputElemSelection}
          onKeyDown={handlekeyPressSelection}
          onClick={handleClick}
        >
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
          <li>Nunc dignissim risus id metus.</li>
          <li>Cras ornare tristique elit.</li>
          <li>Vivamus vestibulum ntulla nec ante.</li>
          <li>Praesent placerat risus quis eros.</li>
          <li>Fusce pellentesque suscipit nibh.</li>
          <li>Integer vitae libero ac risus egestas placerat.</li>
          <li>Vestibulum commodo felis quis tortor.</li>
          <li>Ut aliquam sollicitudin leo.</li>
          <li>Cras iaculis ultricies nulla.</li>
          <li>Donec quis dui at dolor tempor interdum.</li>
        </ul>
      </div>
      <div className="section">
        <h3>Output</h3>
        <ul
          className="input"
          contentEditable
          spellCheck
          dir="ltr"
          id="input"
          ref={inputElemOutput}
          onKeyDown={handlekeyPressOutput}
        >
          <li>Praesent placerat risus quis eros.</li>
          <li>Fusce pellentesque suscipit nibh.</li>
          <li>Integer vitae libero ac risus egestas placerat.</li>
          <li>Vestibulum commodo felis quis tortor.</li>
          <li>Ut aliquam sollicitudin leo.</li>
          <li>Cras iaculis ultricies nulla.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
