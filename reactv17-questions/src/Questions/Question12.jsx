/*
* Question: How to limit the number of options in a select?
* Url: https://stackoverflow.com/questions/71456915/how-to-limit-the-number-of-options-in-a-select
* */

import React, { Component } from "react";
import Select, { components} from "react-select";
import { useState } from "react";

let cheeses = ["Wagasi", "Kalari", "Halloumi", "Manouri"];

let options = [];
options = options.concat(cheeses.map((x) => "Cheese - " + x));

export function Question12() {

  const [value, setValue] = useState("");
  const [optionsToShow, setOptionsToShow] = useState([]);

  function MakeOption(x) {
    return { value: x, label: x };
  }

  const handleInputChange = (value, e) => {
    if (e.action === "input-change") {
      setValue(value);
      const nextOptions = value ? options.map((x) => MakeOption(x)).filter((opt) => opt.label.toLowerCase().includes(value.toLowerCase())) : [];
      setOptionsToShow(nextOptions.length > 3 ? nextOptions.splice(1,3) : nextOptions);
    }
  };

  const Input = props => <components.Input {...props} maxLength={5} />;

  return (
    <Select
      isMulti
      name="colors"
      options={optionsToShow}
      className="basic-multi-select"
      classNamePrefix="select"
      closeMenuOnSelect={false}
      onInputChange={handleInputChange}
      inputValue={value}
      noOptionsMessage={() => null}
    />
  );
}
