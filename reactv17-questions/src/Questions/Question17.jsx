/*
Doc: https://reactjs.org/tutorial/tutorial.html#lifting-state-up
Question: Pass props and use ID again
Url: https://stackoverflow.com/questions/71970219/pass-props-and-use-id-again
 */

import React  from 'react';

function ChildComponent(props) {
  const { data, passElementFromChild } = props;
  const lastElement = data[data.length - 1] || null;

  setTimeout(() => {
    passElementFromChild('this string is what the parent is gonna get');
  }, 300);

  return (
    <div>Last element of the array is: {lastElement}</div>
  );
}

function Question17() {

  const data = ['firstElement', 'middleElement', 'lastElement']

  const passElementFromChild = (infoFromChild) => {
    console.log("infoFromChild: ", infoFromChild);
  }

  return (
    <ChildComponent data={data} passElementFromChild={passElementFromChild} />
  );
}

export default Question17;
