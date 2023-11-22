import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { useLocation } from 'react-router-dom';
import './Graph.css';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Piechart = () => {
  const location = useLocation();
  const { state } = location;
  const { usernames, prices ,bill,dates} = state;

  const dataPoints = state.usernames.map((label, index) => ({
    y: state.prices[index],
    label: label,
  }));
  const dataPoints2 = state.bill.map((label, index) => ({
    y: state.prices[index],
    label: label,
  }));
  const dataPoints3 = state.dates.map((date, index) => ({
    y: state.prices[index],
    label: new Date(date).toLocaleDateString(),
  }));
  
  


  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Yours Expenses report"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: dataPoints
    }]
  }
  const options1 = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Yours Bill report"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: dataPoints2
    }]
  }
  const options2 = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Yours Datewise report"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: dataPoints3
    }]
  }

  return (
    <div className='chart'>
      <CanvasJSChart className="pie" options={options} />
      <CanvasJSChart  className="pie" options={options1} />
      <CanvasJSChart  className="pie" options={options2} />
    </div>
  );
}

export default Piechart;
