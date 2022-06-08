import { createGlobalState } from 'react-hooks-global-state'

const {setGlobalState, useGlobalState} = createGlobalState({
  loggedIn: false,
  image: "Loading",
});
export {useGlobalState, setGlobalState};
