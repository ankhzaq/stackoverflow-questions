/*
* Most effective way to re-evaluate useState when its initial value changes?
* Url: https://stackoverflow.com/questions/71544475/most-effective-way-to-re-evaluate-usestate-when-its-initial-value-changes/71544536#71544536
* */

import React, { useEffect } from 'react';
import { useState } from "react";

const store = {
  getCarouselContents: () => Math.random()
}

// OPTION 1
function Question14() {
  const [carouselContents, setCarouselContents] = useState(store.getCarouselContents());


  useEffect(() => {
    const nextCarousel = store.getCarouselContents();
    if (nextCarousel !== carouselContents) {
      console.log("carousel has changed");
      setCarouselContents(nextCarousel);
    }
  }, []);
  return (
    <div>{carouselContents}</div>
  );
}

// OPTION 2
function Question14_2({ carouselContentFromParent }) {
  const [carouselContents, setCarouselContents] = useState(carouselContentFromParent);

  useEffect(() => {
    console.log("carousel has changed");
    setCarouselContents(carouselContentFromParent);
  }, [carouselContentFromParent]);
  return (
    <div>{carouselContents}</div>
  );
}

function Question14_2_wrapper() {
  const carouselContent = store.getCarouselContents();
  return ( <Question14_2 carouselContentFromParent={carouselContent}  /> );
}

export default Question14_2_wrapper;
