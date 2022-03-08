/*
* Question: Is there a better way to add optional values to an object?
* Url: https://stackoverflow.com/questions/70997464/is-there-a-better-way-to-add-optional-values-to-an-object
* */

export function Question11() {

  const propZero = 0;
  const propNull = null;
  const propEmptyArray = [];
  const propEmptyObject = {};
  const propEmptyString = "";
  const propFalse = false;
  const propTrue = true;

  const resultValueOption1 = {
    propZero: propZero ?? null,
    propNull: propNull ?? null,
    propEmptyArray: propEmptyArray ?? null,
    propEmptyObject: propEmptyObject ?? null,
    propEmptyString: propEmptyString ?? null,
    propFalse: propFalse ?? null,
    propTrue: propTrue ?? null,
  };

  const resultValueOption2 = {
    propZero: propZero ?? undefined,
    propNull: propNull ?? undefined,
    propEmptyArray: propEmptyArray ?? undefined,
    propEmptyObject: propEmptyObject ?? undefined,
    propEmptyString: propEmptyString ?? undefined,
    propFalse: propFalse ?? undefined,
    propTrue: propTrue ?? undefined,
  };

  const resultValueOption3 = {
    propZero: propZero || undefined,
    propNull: propNull || undefined,
    propEmptyArray: propEmptyArray || undefined,
    propEmptyObject: propEmptyObject || undefined,
    propEmptyString: propEmptyString || undefined,
    propFalse: propFalse || undefined,
    propTrue: propTrue || undefined,
  };

  const resultValueOption4 = {
    propZero: propZero || null,
    propNull: propNull || null,
    propEmptyArray: propEmptyArray || null,
    propEmptyObject: propEmptyObject || null,
    propEmptyString: propEmptyString || null,
    propFalse: propFalse || null,
    propTrue: propTrue || null,
  };

  return (
    <div>
      <div>Option1</div>
      <div>{JSON.stringify(resultValueOption1)}</div>
      <div>Option2</div>
      <div>{JSON.stringify(resultValueOption2)}</div>
      <div>Option3</div>
      <div>{JSON.stringify(resultValueOption3)}</div>
      <div>Option4</div>
      <div>{JSON.stringify(resultValueOption4)}</div>
    </div>
  );
}
