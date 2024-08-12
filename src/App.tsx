import './App.css';
import phases from './phases.json'

function App() {
  return (
    <div className="App">
      <h1>Moon Phase Cheat Sheet</h1>
      <table>
        <tbody>
          <tr>
            <th>Synodic period:</th>
            <td>29.53d</td>
          </tr>
          <tr>
            <th>Orbital period:</th>
            <td>27.3217d</td>
          </tr>
          <tr>
            <th>Inclination to ecliptic:</th>
            <td>5.145 deg</td>
          </tr>
          <tr>
            <th>Inclination to earth's equator:</th>
            <td>18.28 - 28.58 deg</td>
          </tr>
        </tbody>
      </table>
      <div id="phases">
        {phases.map(phase => (<div className="phase" key={phase.name}>
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
          <p>{phase.notes}</p>
        </div>))}
      </div>
      <div id="footnotes">
        <h2>Sources</h2>
        <ol>
          <li>
            <a target="_blank" href="https://science.nasa.gov/moon/top-moon-questions/">
              Top Moon Questions - NASA Science
            </a>
          </li>
          <li>
            <a target="_blank" href="https://science.nasa.gov/moon/moon-phases/">
              Moon Phases - NASA Science
            </a>
          </li>
          <li>
            <a target="_blank" href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html">
              Moon Fact Sheet
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
