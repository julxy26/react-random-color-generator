import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

const colorCode = randomColor();

const containerStyle = css`
  background-color: ${colorCode};
  transition: all 0.5s ease-in-out;
  width: auto;
  height: 100vh;
  display: grid;
`;

const hexStyle = css`
  font-size: 30px;
  position: static;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  border: none;
  color: white;
`;

const buttonStyle = css`
  border: none;
  background-color: white;
  color: ${colorCode};
  font-size: 17px;
  font-weight: bold;
  border-radius: 6px;
  padding: 10px 17px 10px 17px;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(28, 28, 28, 0.3);
    color: white;
    background-color: transparent;
    border: 2px solid white;
    cursor: pointer;
    transition: 0.5s;
  }
`;

function App() {
  const [color, setColor] = useState(colorCode);

  return (
    <div className="container" css={containerStyle}>
      <div css={hexStyle}>
        Generated Color: <br />
        {color}
      </div>

      <div>
        <form>
          <fieldset
            style={{
              border: 'none',
              marginTop: '45px',
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div>
              <input id="hue" placeholder="type in a hue" />
              <input type="radio" value="light" name="luminosity" id="light" />
              light
              <input type="radio" value="dark" name="luminosity" id="dark" />
              dark
            </div>
          </fieldset>

          <br />
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              marginBottom: '50%',
            }}
          >
            <button
              className="btn"
              onClick={() => {
                const newRandomColor = colorCode;
                setColor(newRandomColor);
              }}
              css={buttonStyle}
            >
              GENERATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
