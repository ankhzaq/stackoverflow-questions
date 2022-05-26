/*
Question: insert every 3 element from object to a new array of objects
Url: https://stackoverflow.com/questions/72329010/insert-every-3-element-from-object-to-a-new-array-of-objects
 */

import React from 'react';

function Question24() {

  const initialObject = {
    id1: "1",
    name1: "Jon",
    image1: {url: "...."},

    id2: "2",
    name2: "Ron",
    image2: {url: "...." , height: "10"},

    id3: "2",
    name3: "Jess",
    image3: {url: "...." , height: "10"},
  };

  const result = [];
  let index = 1;
  while(Object.keys(initialObject).length) {
    const idKey = `id${index}`;
    const nameKey = `name${index}`;
    const imageKey = `image${index}`;
    const resObject = {};
    // I whould do ->  resObject.id = initialObject[idKey];
    resObject[idKey] = initialObject[idKey];
    delete initialObject[idKey];
    // I whould do ->  resObject.name = initialObject[idKey];
    resObject[nameKey] = initialObject[nameKey];
    delete initialObject[nameKey];
    // I whould do ->  resObject.image = initialObject[idKey];
    resObject[imageKey] = initialObject[imageKey];
    delete initialObject[imageKey];

    result.push(resObject);

    index++;
  }

  console.log("result: ", result);

  return (
    <div>Check the console</div>
  );
}

export default Question24;
