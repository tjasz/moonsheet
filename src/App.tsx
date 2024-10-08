import './App.css';
import data from './phases.json'

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
          <tr>
            <th>Standstill period:</th>
            <td>18.6 years</td>
          </tr>
        </tbody>
      </table>
      <p>
        The location of the moonrise and moonset does not vary with phase.
        The moonrise/moonset moves between its northermost and southernmost point over the course of an orbital period.
        This variation is most extreme during major standstill (e.g. 2024) and least extreme during minor standstill.
      </p>
      <div id="phases">
        <p>Note: phases are mirrored in the Southern hemisphere.</p>
        {data.phases.map(phase => (<div className="phase" key={phase.name}>
          <h2>{phase.name}{phase.emoji}</h2>
          <img src={`./img/${phase.imgSrc}.jpg`} />
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
              <tr>
                <th>Tides:</th>
                <td>{phase.tides}</td>
              </tr>
              <tr>
                <th>Notes:</th>
                <td>{phase.notes}</td>
              </tr>
            </tbody>
          </table>
        </div>))}
      </div>
      <div id="eclipses">
        <h2>Eclipses</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Body</th>
              <th>Type</th>
              <th>Magnitude</th>
              <th>Duration</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {data.eclipses.map(eclipse => <tr key={eclipse.date}>
              <td>{eclipse.date}</td>
              <td>{eclipse.body}</td>
              <td>{eclipse.type}</td>
              <td>{eclipse.magnitude}</td>
              <td>{eclipse.duration}</td>
              <td>{eclipse.location}</td>
            </tr>)}
          </tbody>
        </table>
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
              Moon Fact Sheet - NASA
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.kopernik.org/visitor-info/science-park/phases-of-the-moon">
              Phases of the Moon &#8211; Kopernik Observatory &amp; Science Center
            </a>
          </li>
          <li>
            <a target="_blank" href="https://griffithobservatory.org/extreme-moon-the-major-lunar-standstills-of-2024-2025/">
              Extreme Moon: The Major Lunar Standstills of 2024 - 2025 - Griffith Observatory
            </a>
          </li>
          <li>
            <a target="_blank" href="https://eclipse.gsfc.nasa.gov/">
              NASA Eclipse Web Site
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
