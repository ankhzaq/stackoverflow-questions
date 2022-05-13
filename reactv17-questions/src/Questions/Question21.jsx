/*
Question: Converting a splitted objects of object to array of objects
Url: https://stackoverflow.com/questions/72150445/converting-a-splitted-objects-of-object-to-array-of-objects
 */

const dataIN = [
  {
    "1": {
      "id": 1,
      "coinname": "Binance Coin",
      "symbol": "BNB",
      "owner": "NULL",
      "repo": "NULL",
      "language": "NULL",
      "total_public_repos": 0,
      "tosymbol": "BUSD",
      "exchanges": "Binance",
      "coinlimit": "-1",
      "category": "coin",
      "domain": "cryptocurrency",
      "country": "china",
      "logo": "",
      "flag": "",
      "Product_Live": null,
      "Funds_Raised": null,
      "Sale_type": "BFT",
      "Whitepaper": "",
      "website": "https://www.binance.com/",
      "type": "blockchain",
      "launched": null,
      "Algo_used": "n/a",
      "ExchangesCount": 25,
      "platform": "bsc"
    },
    "2": {
      "id": 2,
      "coinname": "Bitcoin",
      "symbol": "BTC",
      "owner": "Bitcoin",
      "repo": "bitcoin",
      "language": "C++",
      "total_public_repos": 4,
      "tosymbol": "USD",
      "exchanges": "Coinbase",
      "coinlimit": "20,999,999.98",
      "category": "Currency",
      "domain": "cryptocurrency",
      "country": "japan",
      "logo": "",
      "flag": "",
      "Product_Live": null,
      "Funds_Raised": null,
      "Sale_type": "PoW",
      "Whitepaper": "https://www.cryptocompare.com/media/37745820/bitcoin.pdf",
      "website": "https://bitcoin.org/en/",
      "type": "blockchain",
      "launched": null,
      "Algo_used": "SHA-256",
      "ExchangesCount": 72,
      "platform": null
    }
  },
  {
    "1": {
      "id": 1,
      "price": 400.6,
      "marketcap": 67355696581.54001,
      "timestamp": 1651737822,
      "datetime": "2022-05-05 08:03:42"
    },
    "2": {
      "id": 2,
      "price": 39538.5,
      "marketcap": 752463351490.5,
      "timestamp": 1651737817,
      "datetime": "2022-05-05 08:03:37"
    }
  },
  {
    "1": {
      "id": 1,
      "last30dcommits": null,
      "activity": "No Github Repo Found"
    },
    "2": {
      "id": 2,
      "last30dcommits": 154,
      "activity": "High Activity"
    }
  },
  {
    "1": {
      "id": 1,
      "change24h": 2.87,
      "change7d": 2.12,
      "change30d": -13.41,
      "timestamp24h": 1651651200,
      "timestamp7d": 1651132800,
      "timestamp30d": 1649145600
    },
    "2": {
      "id": 2,
      "change24h": 2.26,
      "change7d": 0.47,
      "change30d": -18.04,
      "timestamp24h": 1651651200,
      "timestamp7d": 1651132800,
      "timestamp30d": 1649145600
    }
  },
  {
    "1": {
      "tweetsRating": 14.36,
      "newsRating": 34.4
    },
    "2": {
      "tweetsRating": 16.41,
      "newsRating": 43.44
    }
  },
  {
    "1": {
      "score": 70
    },
    "2": {
      "score": 93.33
    }
  }
];

function Question21() {
  const positionsId = {};
  const dataOUT = [];
  dataIN.forEach((element) => {
    const ids = Object.keys(element);
    ids.forEach((idKey) => {
      const objectInfo = element[idKey];
      const posDataOUT = positionsId[idKey];
      if (posDataOUT === undefined) {
        positionsId[idKey] = dataOUT.length;
        dataOUT.push(objectInfo);
      } else {
        dataOUT[posDataOUT] = { ...dataOUT[posDataOUT], ...objectInfo };
      }
    });
  });
  console.log(dataOUT);

  return (
    <div>Question 21 - check console</div>
  );
}

export default Question21;
