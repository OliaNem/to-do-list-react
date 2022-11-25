import './App.css';
import {Projets} from './Projets'


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Mes projets <span className="title-span"> pour le temps des fêtes </span></h1>
        <h2 class="suggestions-h2">Suggestions :</h2>
        <ul>
          <li className="list-item">Faire du snowboard</li>
          <li className="list-item">Jouer aux jeux de socièté avec des amis</li>
          <li className="list-item">Regarder 5 films de Noël</li>
        </ul>
        <br/>
        <Projets/>
        <div className='Snowflake-box'></div>
      </div>

    </div>
  );
}

export default App;
