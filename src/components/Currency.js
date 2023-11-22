import React, { useState } from 'react';
import axios from 'axios';
import './Currency.css';

const Currency = () => {
  const [oldCurrency, setOldCurrency] = useState('');
  const [oldAmount, setOldAmount] = useState('');
  const [newCurrency, setNewCurrency] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
      params: {
        have: oldCurrency,
        want: newCurrency,
        amount: oldAmount,
      },
      headers: {
        'X-RapidAPI-Key': '0f626657bamsh0ef7c86d9b9fba1p174806jsn4059fc13e714',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setNewAmount(response.data.new_amount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="currency-container">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Old Currency:
          <select
            className="data"
            value={oldCurrency}
            onChange={(e) => setOldCurrency(e.target.value)}
          >
           <option value="USD">USD</option>
            <option value="EUR">Euro</option>
            <option value="AUD">Australia</option>
            <option value="CNY">China</option>
            <option value="XCD">East Caribbean Dollar</option>
            <option value="HKD">Hong Kong Dollar	</option>
            <option value="ISK">Iceland</option>
            <option value="JPY">Japan Yen</option>
            <option value="KPW">North Korea</option>
            <option value="KRW">South Korean Won</option>
            <option value="NZD">New Zealand Dollar</option>
            <option value="RUB">Russia Ruble</option>
            <option value="SGD">Singapore Dollar</option>
            <option value="GBP">United Kingdom Pound</option>
            <option value="XOF">West African CFA Franc</option>
            {/* Add more currency options as needed */}
          </select>
        </label>
        <br />
        <label className="label">
          Old Amount:
          <input
            className="data"
            type="text"
            value={oldAmount}
            onChange={(e) => setOldAmount(e.target.value)}
          />
        </label>
        <br />
        <label className="label">
          New Currency:
          <select
            className="data"
            value={newCurrency}
            onChange={(e) => setNewCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">Euro</option>
            <option value="AUD">Australia</option>
            <option value="CNY">China</option>
            <option value="XCD">East Caribbean Dollar</option>
            <option value="HKD">Hong Kong Dollar	</option>
            <option value="ISK">Iceland</option>
            <option value="JPY">Japan Yen</option>
            <option value="KPW">North Korea</option>
            <option value="KRW">South Korean Won</option>
            <option value="NZD">New Zealand Dollar</option>
            <option value="RUB">Russia Ruble</option>
            <option value="SGD">Singapore Dollar</option>
            <option value="GBP">United Kingdom Pound</option>
            <option value="XOF">West African CFA Franc</option>

            {/* Add more currency options as needed */}
          </select>
        </label>
        <br />
        <button type="submit">Convert</button>
      </form>
      {newAmount && (
        <div>
          <p className="result">New Amount: {newAmount}</p>
        </div>
      )}
    </div>
  );
};

export default Currency;
