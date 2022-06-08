/*
Question: useGlobalState resetting when I navigate
Url: https://stackoverflow.com/questions/72501808/useglobalstate-resetting-when-i-navigate
 */

/* import React, { useEffect } from 'react';

import { createStore, createGlobalState } from 'react-hooks-global-state';

const initialStateSaved = window.sessionStorage.getItem("reducer") && JSON.parse(window.sessionStorage.getItem("reducer"));

const initialState = {
  loggedIn: false,
  image: "Loading",
};

const reducer = (state, newState)  => {
  window.sessionStorage.setItem("reducer", JSON.stringify(newState));
  return newState;
}

const store = createStore(reducer, initialStateSaved || initialState);

const { useStoreState, dispatch } = store;

function Question25() {

  const loggedIn = useStoreState('loggedIn');

  useEffect(() => {
    if (!loggedIn) {
      dispatch({
        image: 'zaquielverse',
        loggedIn: true,
      });
    }
  });

  return (
    <div>Question25</div>
  );
}

export default Question25; */


import React, { useEffect } from 'react';

import { createGlobalState } from 'react-hooks-global-state';

const initialStateSaved =  window.sessionStorage.getItem("reducer") && JSON.parse( window.sessionStorage.getItem("reducer"));

const initialState = {
  loggedIn: false,
  image: "Loading",
};

const { setGlobalState, useGlobalState } = createGlobalState(initialStateSaved || initialState);

function Question25() {

  const [loggedIn] = useGlobalState("loggedIn")

  useEffect(() => {
    if (!loggedIn) {
      // login

      const nextState = {
        image: 'zaquielverse',
        loggedIn: true,
      }

      setGlobalState('image', nextState.image);
      setGlobalState('loggedIn', nextState.loggedIn);

      window.sessionStorage.setItem("reducer", JSON.stringify(nextState));
    }
  }, []);

  return (
    <div>Question25</div>
  );
}

export default Question25;
