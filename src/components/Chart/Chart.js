import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const yearValues = props && props.yearData.map(e => e && e.value);
  const maximumValue = Math.max(...yearValues);

  return (
    <div className='chart'>
      {props.yearData.map(data => <ChartBar key={data.label} label={data.label} value={data.value} maxVal={maximumValue} />)}
    </div>
  )
}
export default Chart;