/*
Question: What is the difference between functional React setState and non-functional?
Url: https://stackoverflow.com/questions/70888102/what-is-the-difference-between-functional-react-setstate-and-non-functional/70889000#70889000
 */
import { useEffect, useState } from 'react';

function Question6() {
  const [data, setData] = useState(0);

  useEffect(() => {
    // Result will be 1
      // setData(data + 1);
      // setData(data + 1);
    // Result will be 2
      setData(data + 1);
      setData(prev => prev + 1);

  }, []);

  return (<div>data: {data}</div>);
}

export default Question6;
