import React, { useState } from 'react';
import ColorButtons from './ColorButtons';


export default function Colorbar() {
  const [color, setColor] = useState('white'); 
  return (
    <div
      style={{
        backgroundColor: color,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1></h1>
      <ColorButtons
        currentColor={color}
        changeColor={setColor}
      />
    </div>
  );
}
