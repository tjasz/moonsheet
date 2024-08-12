import React from 'react';
import logo from './logo.svg';
import './App.css';
import phases from './phases.json'

function App() {
  return (
    <div className="App">
      <h1>Moon Phase Cheat Sheet</h1>
      <table>
        <tbody>
          <tr>
            <th>Length of orbit:</th>
            <td>27.322d</td>
          </tr>
          <tr>
            <th>Length of sidereal day:</th>
            <td>29.5d</td>
          </tr>
        </tbody>
      </table>
      {phases.map(phase => (<div className="phase">
        <h2>{phase.name}</h2>
        <img src={`img/${phase.imgSrc}.jpg`} />
        <table>
          <tbody>
            <tr>
              <th>Rises:</th>
              <td>{phase.rises}</td>
            </tr>
            <tr>
              <th>Sets:</th>
              <td>{phase.sets}</td>
            </tr>
          </tbody>
        </table>
      </div>))}
      <div id="footnotes">
        <ol>
          <li id="source1">
            <a target="_blank" href="https://science.nasa.gov/moon/top-moon-questions/">
              Top Moon Questions - NASA Science
            </a>
            <a target="_blank" href="https://science.nasa.gov/moon/moon-phases/">
              Moon Phases - NASA Science
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
