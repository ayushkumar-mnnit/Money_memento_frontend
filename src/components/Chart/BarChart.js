import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CanvasJSReact from '@canvasjs/react-charts';
import './Graph.css';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = () => {
  const location = useLocation();
  const { state } = location;
  const { usernames, prices, bill, dates } = state;

  useEffect(() => {
    if (state) {
      const dataPoints = usernames.map((label, index) => ({
        y: prices[index],
        label: label,
      }));

      const dataPoints1 = bill.map((label, index) => ({
        y: prices[index],
        label: label,
      }));

      const options = {
        title: {
          text: 'Expenses vs Price Bar chart',
        },
        data: [
          {
            type: 'column',
            dataPoints: dataPoints,
          },
        ],
      };
      const options1 = {
        title: {
          text: 'Bill vs Price Bar chart',
        },
        data: [
          {
            type: 'column',
            dataPoints: dataPoints1,
          },
        ],
      };

      const chart = new CanvasJS.Chart('chartContainer', options);
      const chart1 = new CanvasJS.Chart('chartContainer1', options1);
      chart.render();
      chart1.render();
    }
  }, [state]);

  return (
    <>
      <div id="chartContainer" style={{ height: '360px', width: '100%' }} />
      <div id="chartContainer1" style={{ height: '360px', width: '100%' }} />
    </>
  );
};

export default BarChart;
