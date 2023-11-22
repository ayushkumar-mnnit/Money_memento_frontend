import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useLocation } from 'react-router-dom';
import './Graph.css';

const Linechart = () => {
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      const { usernames, prices, dates, bill } = state;

      console.log('Usernames:', usernames);
      console.log('Prices:', prices);
      
      // Format dates before logging
      const formattedDates = dates.map(date => new Date(date).toLocaleDateString());

      console.log('Formatted Dates:', formattedDates);
      console.log('Bill:', bill);

      // Additional logic or processing here
    }
  }, [state]);

  const data = {
    labels: state ? state.usernames : [],
    datasets: [
      {
        label: 'Expenses vs Prices',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: state ? state.prices : [],
      },
    ],
  };

  const data2 = {
    labels: state ? state.dates.map(date => new Date(date).toLocaleDateString()) : [],
    datasets: [
      {
        label: 'Date vs Prices',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: state ? state.prices : [],
      },
    ],
  };

  const data3 = {
    labels: state ? state.bill : [],
    datasets: [
      {
        label: 'Bills vs Prices',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: state ? state.prices : [],
      },
    ],
  };



  return (
    <>
      <div className='chart'>
        <h2 className='charthead'>Expenses vs Prices Line Chart</h2>
        <Line className='value' data={data} />
        <h2 className='charthead'>Date vs Prices Line Chart</h2>
        <Line className='value' data={data2} />
        <h2   className='charthead'>Bills vs prices Line Chart</h2>
        <Line className='value' data={data3} />
       
      </div>
    </>
  );
};

export default Linechart;

