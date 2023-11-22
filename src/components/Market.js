import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Market.css';

const Market = () => {
  const [query, setQuery] = useState('ONGC');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    const options = {
      method: 'GET',
      url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete',
      params: { query },
      headers: {
        'X-RapidAPI-Key': '0f626657bamsh0ef7c86d9b9fba1p174806jsn4059fc13e714',
        'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []); // Initial search on component mount

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='topnews'>
      <h1 className='financehead'>Get Finance News</h1>
    <div className='news'>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter company symbol"
        />
        <button className='button-56'onClick={handleSearch}>Search</button>
      </div>

      <h1>Company Information</h1>
      <ul>
        {data.quote.map((quote) => (
          <li key={quote.id}>
            <strong>{quote.title}</strong>
            <p className='text'>Symbol: {quote.symbol}</p>
            <p className='text'> Exchange: {quote.exchange}</p>
            <p className='text'>country: {quote.country}</p>
            <p className='text'>ticker: {quote.ticker}</p>
            <p className='text'>tickername: {quote.tickerName}</p>

            {/* Add more details as needed */}
          </li>
        ))}
      </ul>

      <h1>News Articles</h1>
      <ul>
        {data.news.map((article) => (
          <li key={article.id}>
            <strong>{article.title}</strong>
            <p className='text'>Date: {new Date(article.date * 1000).toLocaleDateString()}</p>
            <p className='text'>
              <a href={article.longURL} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
           

            </p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
};

export default Market;
