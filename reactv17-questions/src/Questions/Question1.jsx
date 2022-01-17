/*
Question: Why does the onChange event handler on <form> pick upp dispatched events from <select>, but not <input>?
Url: https://stackoverflow.com/questions/70549260/why-does-the-onchange-event-handler-on-form-pick-upp-dispatched-events-from-s/70550037#7055003
 */

import { useEffect, useRef } from 'react';

function Question1() {
  const inpRef = useRef();
  const selRef = useRef();

  function onChange(e) {
    console.log(e.target.name); // Only "select" is logged
  }

  function dispatchChange() {
    inpRef.current.dispatchEvent(new Event("change", { bubbles: true }));
    selRef.current.dispatchEvent(new Event("change", { bubbles: true }));
  }

  useEffect(() => {
    inpRef.current._valueTracker.getValue = () => {
      return 'fake value'
    }
  }, []);

  return (
    <>
      <form onChange={onChange}>
        <input ref={inpRef} name="input" />
        <select ref={selRef} name="select" />
      </form>
      <button onClick={dispatchChange}>Trigger change</button>
    </>
  );
}

export default Question1;
