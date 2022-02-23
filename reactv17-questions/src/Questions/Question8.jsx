/*
Question: styled component multiple override css no effect?
Url: https://stackoverflow.com/questions/71005696/styled-component-multiple-override-css-no-effect
 */

// OPTION 1: WRAPPER THE COMPONENT
import { useEffect, useRef } from 'react';

function Question8() {
  const refA = useRef();
  return (<div>
    <video src="https://www.youtube.com/watch?v=1vNlhP0Tc-k" controls></video>
    <a href="https://www.youtube.com/watch?v=1vNlhP0Tc-k" download></a>
  </div>);
}


export default Question8;
