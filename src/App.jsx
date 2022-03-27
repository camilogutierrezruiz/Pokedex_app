import './index.css'
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Characters from './components/Characters';
import CharactersInfo from './components/CharactersInfo';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/characters' element={<Characters />} />
          <Route path='/charactersinfo' element={<CharactersInfo />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
