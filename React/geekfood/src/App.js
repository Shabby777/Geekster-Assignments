import './App.css';
import Header from './Components/Essentials/Header';
import Home from "./Components/Home/Home";
import Resturant from './Components/Resturants/Resturant';
import Foods from './Components/Foods/Foods';
import Quote from './Components/Quote/Quote';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Essentials/Footer';
import { Route,Routes } from 'react-router-dom';

function App() {
  document.title="GeeksFood"
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/resturants" element={<Resturant />}></Route>
        <Route path="/foods" element={<Foods />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
      </Routes> 
      
      <Footer />
    </div>
  );
}

export default App;
