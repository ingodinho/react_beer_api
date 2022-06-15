import './App.scss';
import Beerlist from './pages/Beerlist';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import BeerDetails from './pages/BeerDetails';
import Navbar from './components/Navbar';
import {useLocation} from 'react-router-dom';

function App() {
  
  const {pathname} = useLocation();
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<Beerlist/>}/>
        <Route path='/beer/:id' element={<BeerDetails/>}/>
      </Routes>
      {pathname !== '/' ? <Navbar/> : ''}
    </div>
  );
}

export default App;
