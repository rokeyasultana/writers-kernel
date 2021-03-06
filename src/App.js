import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/home' element={<Home></Home>}></Route>
<Route path='/contact' element={<Contact></Contact>}></Route>
<Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
