import React from 'react';

function ColorButtons(props) {
  return (
    <div>
      <h2> {props.dataFromParent}</h2>
      <h3>{props.currentColor}</h3>

      <button className='border border-dark '
        onClick={() => props.changeColor('red')}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'red',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
        }}
      >
        Red
      </button>
      <button  className='border border-dark '
        onClick={() => props.changeColor('blue')}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'blue',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
        }}
      >
        Blue
      </button>
      <button className='border border-dark '
        onClick={() => props.changeColor('yellow')}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'yellow',
          border: 'none',
          borderRadius: '5px',
          color: 'black',
        }}
      >
        Yellow
      </button>
    </div>
  );
}

export default ColorButtons;
