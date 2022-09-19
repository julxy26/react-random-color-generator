import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

const formStyle = css`
  border: 3px solid white;
  border-radius: 8px;
  padding: 30px 60px;
  height: 50vh;
`;

const hexStyle = css`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  border: none;
  color: white;
  margin-top: 50px;
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

const buttonStyle = css`
  border: 1px solid white;
  background-color: transparent;
  color: white;
  font-size: 17px;
  font-weight: bold;
  border-radius: 14px;
  margin-top: 40px;
  margin-left: 35%;
  padding: 10px 17px;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 8px 16px 0 rgba(28, 28, 28, 0.1);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(28, 28, 28, 0.3);
    color: #646a75;
    background-color: white;
    border: 1px solid lightgrey;
    cursor: pointer;
    transition: 0.5s;
  }
`;

export default function App() {
  const [userLuminosity, setUserLuminosity] = useState('');
  const [userHue, setUserHue] = useState('');
  const [color, setColor] = useState(
    randomColor({
      hue: userHue,
      luminosity: userLuminosity,
    }),
  );

  return (
    <div
      style={{
        backgroundColor: color, // cannot put above the definition
        border: 'none',
        transition: 'all 0.5s ease-in-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        css={formStyle}
      >
        <div css={hexStyle}>
          Generated Color: <br />
          {color}
        </div>

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
            type="button"
            id="generate"
            onClick={() => {
              setColor(
                randomColor({
                  hue: userHue,
                  luminosity: userLuminosity,
                }),
              );
            }}
            css={buttonStyle}
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
}
