import './App.css';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

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
          position: 'static',
          marginTop: '150px',
          display: 'block',
          justifyContent: 'center',
          textAlign: 'center',
          border: 'none',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Generated Color: <br /> {color}
      </div>

      <br />
      <div>
        <button
          className="btn"
          onClick={() => {
            const newRandomColor = colorCode;
            setColor(newRandomColor);
          }}
          style={{
            position: 'absolute',
            top: '40%',
            left: '45%',
            marginTop: '25px',
            width: 'max-content',
            border: 'none',
            color: colorCode,
            backgroundColor: 'white',
            fontSize: '17px',
            fontWeight: 'bold',
            borderRadius: '6px',
            padding: '10px 17px 10px 17px',
            transition: 'all 0.5s ease-in-out',
          }}
        >
          GENERATE
        </button>
      </div>
    </div>
  );
}

export default App;
