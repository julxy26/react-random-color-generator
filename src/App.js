import './App.css';
import { Chalk } from 'chalk';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

const chalk = new Chalk({ level: 3 });

// update background color "Generated Color: <hex code>"

function App() {
  const colorCode = randomColor();
  const [color, setColor] = useState(colorCode);

  return (
    <div
      className="container"
      style={{
        backgroundColor: colorCode,
      }}
    >
      <div
        style={{
          fontSize: '30px',
          position: 'relative',
          top: '35%',
          display: 'block',
          justifyContent: 'center',
          textAlign: 'center',
          border: 'none',
          color: 'white',
          fontWeight: 'bold',
          margin: 0,
        }}
      >
        Generated Color: <br /> {color}
      </div>

      <br />

      <button
        className="btn"
        onClick={() => {
          const newRandomColor = colorCode;
          setColor(newRandomColor);
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '45%',
          marginRight: '-50%',
          marginTop: '25px',
          width: 'max-content',
          border: '3px solid white',
          backgroundColor: 'white',
          color: colorCode,
          fontSize: '17px',
          fontWeight: 'bold',
          borderRadius: '6px',
          padding: '8px 15px 8px 15px',
          transition: 'all 0.5s ease-in-out',
        }}
      >
        GENERATE
      </button>
    </div>
  );
}

export default App;
