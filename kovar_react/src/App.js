import './App.css';
import About from './pages/About_us';
import Home from './pages/home';
import Facts from './pages/facts';
import Cats from "./pages/cats";
import {Routes, Route} from "react-router"
import "./utilities/scroll"

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about_us' element={<About/>}></Route>
        <Route path='/facts' element={<Facts/>} />
        <Route path='/cats' element={<Cats/>} />
      </Routes>
  );
}

export default App;
