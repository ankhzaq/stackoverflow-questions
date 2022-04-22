/*
Question: checkbox functionality using react with typescript
Url: https://stackoverflow.com/questions/71902674/checkbox-functionality-using-react-with-typescript
 */

import React, { useEffect, useState } from 'react';

const CHECKBOX_VALUES = [false, false];

function Question16() {
  const [checkboxValues, setCheckboxValues] = useState(CHECKBOX_VALUES);
  const checkboxRef = React.useRef(null);

  const onCheck = (pos, value) => {
    const nextCheckboxValues = [ ...checkboxValues ];
    nextCheckboxValues[pos] = value;
    setCheckboxValues(nextCheckboxValues);
  }

  useEffect(() => {
    const isIndeterminate = checkboxRef.current.indeterminate;
    const someCheckboxChecked = checkboxValues.some((checkValue) => checkValue);
    const someCheckboxUnchecked = checkboxValues.some((checkValue) => !checkValue);
    const nextIndeterminate = someCheckboxChecked && someCheckboxUnchecked;
    if (isIndeterminate !== nextIndeterminate) {
      checkboxRef.current.indeterminate = nextIndeterminate;
    }
    if (!nextIndeterminate) {
      checkboxRef.current.checked = someCheckboxChecked;
    }
  }, [checkboxValues]);

  return (
    <>
      <div>
        <span>Parent checkbox</span>
        <input type="checkbox" ref={checkboxRef} />
      </div>
      <div>
        <span>Checkbox 1</span>
        <input
          checked={checkboxValues[0]}
          onChange={(elem) => {
              const value = elem.target.checked;
              onCheck(0, value);
          }}
          type="checkbox"
        />
      </div>
      <div>
        <span>Checkbox 2</span>
        <input
          checked={checkboxValues[1]}
          onChange={(elem) => {
            const value = elem.target.checked;
            onCheck(1, value);
          }}
          type="checkbox"
        />
      </div>
    </>
  );
}

export default Question16;
