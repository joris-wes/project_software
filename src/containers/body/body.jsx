import React from 'react';
import './body.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import Chart from './chart';

const data = [
  {
    time: '12:00',
    Enschede: 13,
    Gronau: 13,
    Wierden: 10,
    pEnschede: 750,
    pGronau: 750,
    pWierden: 750,
  },
  {
    time: '13:20',
    Enschede: 14,
    Gronau: null,
    Wierden: null,
    
  },
  {
    time: '14:00',
    Enschede: 15,
    Gronau: 14,
    Wierden: 13,
    pEnschede: 770,
    pGronau: 750,
    pWierden: 740,
  },
  {
    time: '16:00',
    Enschede: 13,
    Gronau: 14,
    Wierden: 12,
    pEnschede: 780,
    pGronau: 760,
    pWierden: 750,
  },
  {
    time: '18:00',
    Enschede: 10,
    Gronau: 10,
    Wierden: 9,
    pEnschede: 790,
    pGronau: 770,
    pWierden: 760,

  },
  {
    time: '20:00',
    Enschede: 8,
    Gronau: 7,
    Wierden: 7,
    pEnschede: 800,
    pGronau: 780,
    pWierden: 770,

  },
  {
    time: '22:00',
    Enschede: 5,
    Gronau: 5,
    Wierden: 0,
    pEnschede: 750,
    pGronau: 750,
    pWierden: 750,
  },
  {
    time: '00:00',
    Enschede: 0,
    Gronau: 0,
    Wierden: -1,
    pEnschede: 750,
    pGronau: 750,
    pWierden: 750,
  },
]

class reText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  changeText = (StateArray) => {
    this.setState({ text: StateArray.target.value });
    console.log(this.state.text)
  }
  render() {
    return (
      <h1 id="one"><reText text></reText></h1>
    )
}
}

const body = () => {
  return (
    <div className='body'>
       <h1 id="one">You have selected the temperature graph for:</h1>
       <reText />
       <reText />
        <div className='graphbody__container'>

            <Chart />
            <Chart />           
        </div>
    </div>
  )
}
export default body;
