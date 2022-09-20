import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

const backgroundStyle = (color) => css`
  background-color: ${color};
  transition: all 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const formStyle = css`
  border: 2px solid white;
  border-radius: 8px;
  padding: 30px 60px;
  height: 50vh;
  box-shadow: 0px 0px 40px 20px rgba(255, 255, 255, 0.4);
`;

const hexStyle = (color) => css`
  background-color: ${color};
  transition: all 0.4s ease-in-out;
  margin-top: 70px;
  color: white;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  border: none;
`;

const inputStyle = css`
  border: none;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 45px;
  margin-left: 40px;
`;

const inputField = css`
  position: relative;
  cursor: text;
  line-height: 20px;
  padding: 0 16px;
  height: 29px;
  width: 153px;
  margin: 0px 44px 12px 48px;
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

const buttonStyle = css`
  border: 1px solid white;
  background-color: transparent;
  color: white;
  font-size: 17px;
  font-weight: bold;
  border-radius: 14px;
  margin-top: 50px;
  margin-left: 35%;
  padding: 10px 17px;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 8px 16px 0 rgba(28, 28, 28, 0.1);

  &:hover {
    box-shadow: 0px 0px 30px 10px rgba(255, 255, 255, 0.3);
    color: #646a75;
    background-color: white;
    border: 1px solid lightgrey;
    cursor: pointer;
    transition: 0.5s;
  }
`;

function App() {
  const [color, setColor] = useState(randomColor());
  const [userLuminosity, setUserLuminosity] = useState('');
  const [userHue, setUserHue] = useState('');
  const userInput = randomColor({
    hue: userHue,
    luminosity: userLuminosity,
  });
  return (
    <div css={backgroundStyle(color)}>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          css={formStyle}
        >
          <div css={hexStyle(color)}>Generated Color: {color}</div>

          <fieldset css={inputStyle}>
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
                  value={userHue}
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

          <div>
            <button
              id="generate"
              onClick={() => {
                setColor(userInput);
              }}
              css={buttonStyle}
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
