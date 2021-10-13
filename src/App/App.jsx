import React from 'react';
import className from 'classname';

import './App.css';

const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Find good job', done: false },
  { text: 'Go to the gym', done: true },
];

const App = () => (
  <>
    <div className="app">
      <h1>My Wish List</h1>
      <fieldset className="wish-input">
        <legend className="wish-input__label">New Wish</legend>
        <input
          className="wish-input__field"
          type="text"
          placeholder=" Enter your Wish Here"
        />
      </fieldset>
      <ul className="wish-list">
        {wishes.map(({ text, done }, i) => (
          <li
            key={text}
            className={className('wish-list__item', {
              'wish-list__item--done': done,
            })}
          >
            <label htmlFor={`wish${i}`}>
              <input id={`wish${i}`} type="checkbox" checked={done} />
              {text}
            </label>
          </li>
        ))}
      </ul>
      <button className="wish-clear" type="button">
        Archive done
      </button>
    </div>
  </>
);

export default App;
