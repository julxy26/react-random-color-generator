import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

const hexStyle = css`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  border: none;
  color: white;
  margin-top: 50px;
`;

const buttonStyle = css`
  border: 1px solid lightgrey;
  background-color: white;
  color: #646a75;
  font-size: 17px;
  font-weight: bold;
  border-radius: 14px;
  margin-top: 40px;
  padding: 10px 17px;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 8px 16px 0 rgba(28, 28, 28, 0.3);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(28, 28, 28, 0.3);
    color: white;
    background-color: transparent;
    border: 1px solid white;
    cursor: pointer;
    transition: 0.5s;
  }
`;

const inputField = css`
  position: relative;
  cursor: text;
  line-height: 20px;
  padding: 0 16px;
  height: 29px;
  width: 153px;
  margin: 12px 48px;
  background-color: #fff;
  border: 1px solid #d6d6e7;
  border-radius: 12px;
  color: rgb(35, 38, 59);
  box-shadow: inset 0 1px 4px 0 rgb(119 122 175 / 30%);
  overflow: hidden;
  transition: all 100ms ease-in-out;
  display: grid;
  :focus {
    border-color: #3c4fe0;
    box-shadow: 0 1px 0 0 rgb(35 38 59 / 5%);
  }
`;

function App() {
  const colorCode = randomColor();
  const [color, setColor] = useState(colorCode);
  const [userLuminosity, setUserLuminosity] = useState('');
  const [userHue, setUserHue] = useState('');
  const userInput = randomColor({
    hue: userHue,
    luminosity: userLuminosity,
  });
  return (
    <div
      className="container"
      style={{
        backgroundColor: color,
        transition: 'all 0.5s ease-in-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          border: '3px solid white',
          borderRadius: '8px',
          padding: '40px',
          height: '60vh',
        }}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div css={hexStyle}>
            Generated Color: <br />
            {color}
          </div>

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
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <label htmlFor="hue">Color:</label>
                <input
                  css={inputField}
                  id="hue"
                  placeholder="type in a hue"
                  onChange={(event) => {
                    setUserHue(event.currentTarget.value);
                  }}
                />
              </span>
              <label htmlFor="luminosity">Luminosity:</label>
              <input
                type="radio"
                value="light"
                name="luminosity"
                id="light"
                onChange={(event) => {
                  setUserLuminosity(event.currentTarget.value);
                }}
              />
              light
              <input
                type="radio"
                value="dark"
                name="luminosity"
                id="dark"
                onChange={(event) => {
                  setUserLuminosity(event.currentTarget.value);
                }}
              />
              dark
              <input
                type="radio"
                value=""
                name="luminosity"
                id="random"
                onChange={(event) => {
                  setUserLuminosity(event.currentTarget.value);
                }}
              />
              random
            </div>
          </fieldset>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              className="btn"
              id="generate"
              value="Generate"
              onClick={() => {
                setColor(userInput);
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
