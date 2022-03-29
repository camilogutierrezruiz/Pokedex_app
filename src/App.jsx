import './index.css'
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './components/Login';
import Pokedex from './components/Pokedex';
import PokemonInfo from './components/PokemonInfo';
import PokeBall from './assets/pokeball_monochrome.png'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:pokemonName' element={<PokemonInfo />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
