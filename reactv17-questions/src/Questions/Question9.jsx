import React, { useEffect } from 'react';
import axios from "axios";

const { useState } = React;

function Question9() {
  const [price, setPrice] = useState("0");
  const [loading, setLoading] = useState(false);
  let options: any;
  options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/stock/v2/get-summary",
    params: { symbol: "AAPL", region: "US" },
    headers: {
      "x-rapidapi-host": "yh-finance.p.rapidapi.com",
      "x-rapidapi-key": "nonono:)",
    },
  };

  // option 1, call in an useEffect like componentDidMount
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setPrice(response.data.price.regularMarketPrice.fmt.toString());
      })
      .catch(function (error) {
        console.error("Error getting price: ", error);
      });
  }, []);

  // option 2, call in an useEffect every time that the component refresh and don't have the data
  useEffect(() => {
    if (!loading && !data) {
      setLoading(true);
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setPrice(response.data.price.regularMarketPrice.fmt.toString());
          setLoading(false);
        })
        .catch(function (error) {
          console.error("Error getting price: ", error);
          setLoading(false);
        });
    }

  }, []);

  return (
    <>
      {price === "0" ? (
        <div> price 0</div>
      ) : (
        <div>AAPL: {price}</div>
      )}
    </>
  );
}

export default Question9;
