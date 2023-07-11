// https://github.com/aulneau/next.js-with-react-plotly.js
import React from 'react';
import dynamic from 'next/dynamic';
const Plot = dynamic(() => import('react-plotly.js'), {ssr: false})

export default function plotly_page() {
  var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 6, 3, 6, 1],
    mode: 'markers',
    type: 'scatter',
    name: 'Team A',
    text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
    marker: { size: 12 }
  };
  
  var trace2 = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5],
    y: [4, 1, 7, 1, 4],
    mode: 'markers',
    type: 'scatter',
    name: 'Team B',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    marker: { size: 12 }
  };
  
  var x1 = [1, 2, 3], y1=[2, 5, 3];
  var trace3 = {type: 'scatter', x: x1, y: [2, 6, 3],
    mode: 'lines+markers', marker: {color: 'red'}}
  var trace4 = {type: 'bar', x: x1, y: y1}

  var layout = {
    xaxis: { range: [ 0.75, 5.25 ] },
    yaxis: { range: [0, 8]},
    title:'Data Labels Hover'
  };
  
  return (
    <div>
      <Plot data={[ trace1, trace2 ]} layout= {layout} />
      <Plot data={[ trace3, trace4 ]} layout={ {width: 600, height: 400, title: 'Two Plots In One'} } />
    
    </div>
  );
}