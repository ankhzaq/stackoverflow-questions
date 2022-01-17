/*
Question: How to share Child component data into Parent Component uisng context API into Reactjs
Url: https://stackoverflow.com/questions/70553378/how-to-share-child-component-data-into-parent-component-uisng-context-api-into-r
 */


// OPTION A - useContext
import { createContext, useContext, useState } from 'react';

import React from 'react';

const Context = createContext();

const Child = () => {
  const [info, setInfo] = useContext(Context);
  return (
    <div>
      Product Name: <input type="text" value={info.name} onChange={(e) => {
      setInfo({ ...info, name: e.target.value });
    }} />
      <br />
      Description:- <input type="text" value={info.desc} onChange={(e) => {
      setInfo({ ...info, desc: e.target.value });
    }} />
    </div>
  );
}

function Question2() {
  const [info, setInfo] = useState({
    name: '',
    desc: ''
  });

  return (
    <div className="App">
      <Context.Provider value={[info, setInfo]}>
        <Child />
      </Context.Provider>
    </div>
  );
}

export default Question2;


/* OPTION B - useState in the child component
import { useEffect, useState } from 'react';

import React from 'react';

const Child = ({ setParentInfo }) => {
  const [info, setInfo] = useState({ name: '', desc: '' });
  useEffect(() => {
    setParentInfo(info);
  }, [info])
  return (
    <div>
      Product Name: <input type="text" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value  })} />
      <br />
      Description:- <input type="text" value={info.desc} onChange={(e) => setInfo({ ...info, desc: e.target.value  })} />
    </div>
  )
}

let info = { name: '', desc: '' }

function Question2() {
  return (
    <div className="App">
      <Child setParentInfo={(newInfo) => {
        info = { ...newInfo };
      }} />
    </div>
  );
}

export default Question2;
*/

/* OPTION C - useState in the parent Component
import { useState } from 'react';

import React from 'react';

const Child = ({ info, setParentInfo }) => {
  return (
    <div>
      Product Name: <input type="text" value={info.name} onChange={(e) => setParentInfo({ ...info, name: e.target.value  })} />
      <br />
      Description:- <input type="text" value={info.desc} onChange={(e) => setParentInfo({ ...info, desc: e.target.value  })} />
    </div>
  )
}


function Question2() {
  const [info, setInfo] = useState({ name: '', desc: '' });
  console.log("parent: ", info);
  return (
    <div className="App">
      <Child info={info} setParentInfo={(newInfo) => {
        setInfo({ ...newInfo });
      }} />
    </div>
  );
}

export default Question2;
*/
