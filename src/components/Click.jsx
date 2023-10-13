import React, { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('blue');

  const handleButtonClick = () => {
    const random = getRandomColor;
    
    setBackgroundColor(random);
  };

  

  const getRandomColor = () => {
    let letter = '0987654321ABCDFEG';
    let color = '#';

    for(let i=0; i<6 ; i++){
        color += letter[Math.floor(Math.random() *16)]
    }
    return color;

  }

  return (
    <div>
      <button onClick={handleButtonClick}>Change Background Color to Red</button>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: backgroundColor,
          transition: 'background-color 0.5s',
        }}
      >
        <h1>Click the button to change the background color to red</h1>
      </div>
    </div>
  );
}

export default App;
