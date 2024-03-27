import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("http://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins !{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading....</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name}({coin.symbol}):${coin.quotes.USD.price}USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CoinTracker;

//fetch()전역함수
//fetch()메서드는 네트워크에서 리소스(url)을 가져올 때 사용한다.