// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Header/>
     
      <br />
      <div>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
    </div>
   
   
  );
}

export default App;
