/*
Question: How to control tabIndex if submit and cancel form is not in same file ?
Url: https://stackoverflow.com/questions/73257481/how-to-control-tabindex-if-submit-and-cancel-form-is-not-in-same-file-react
 */

import React, { useEffect, useRef } from 'react';

// First file with two inputs
function File1({ addElements, changeFocus }) {

  const input1 = useRef(null);
  const input2 = useRef(null);

  useEffect(() => {
    addElements([input1.current, input2.current])
  }, []);


  return (
    <div>
      <input ref={input1} name="input1" placeholder="input1" onFocus={changeFocus} />
      <input ref={input2} name="input2" placeholder="input2" onFocus={changeFocus} />
    </div>
  )
}

// Second file with two buttons
function File2({ addElements, changeFocus }) {

  const button1 = useRef(null);
  const button2 = useRef(null);

  useEffect(() => {
    addElements([button1.current, button2.current])
  }, []);

  return (
    <div>
      <button ref={button1} name="button1" onClick={changeFocus}>cancel</button>
      <button ref={button2} name="button2" onClick={changeFocus}>button</button>
    </div>
  )
}

// Timer to don't execute focus function two times
let focusTimer = null;

function Question26() {
  // Variable to know in which element is the focus
  const indexRef = useRef(-1);
  // Variable with the list of elements that we want to change the focus after tab press (this could be an state variable, but it doesn't matter too much)
  const elementsRef = useRef([]);

  // function to change the focus with tab press
  const changeFocus = () => {
    clearTimeout(focusTimer);
    focusTimer = setTimeout(() => {
      console.log("changeFocus");
      let nextIndex = indexRef.current + 1;
      // control last index
      if (nextIndex > elementsRef.current.length - 1) nextIndex = 0;

      // focus
      if (elementsRef.current[nextIndex]) elementsRef.current[nextIndex].focus();

      // update focus index
      indexRef.current = nextIndex;
    }, 200);
  }

  // add listener to detect tab press and to call the "changeFocus" function
  useEffect(() => {
    document.addEventListener("keyup", function(event) {
      if (event.key.toLowerCase() === 'tab') {
        changeFocus();
      }
    });
  }, []);


  // Function to add elements to navigate on tab press
  const addElements = (componentsRef) => {
    elementsRef.current = elementsRef.current.concat(componentsRef);
  }

  // Detect when user has click on element and change the focus
  const changeFocusFromUser = (element) => {
    // timer added because if user click on tab button, there are two listeners: input listener + our listener
    clearTimeout(focusTimer);
    focusTimer = setTimeout(() => {
      console.log("changeFocusFromUser");
      const indexElement = elementsRef.current.findIndex((el) => el.name === element.target.name)
      if (indexElement >= 0) {
        indexRef.current = indexElement;
      }
    }, 200);
  }

  // Print both files
  return (
    <>
      <div>Question26</div>
      <File1 addElements={addElements} changeFocus={changeFocusFromUser} />
      <File2 addElements={addElements} changeFocus={changeFocusFromUser} />
    </>
  );
}

export default Question26;
