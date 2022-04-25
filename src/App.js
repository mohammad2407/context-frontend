import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router';
import { Page1 } from './Pages/Page1';
import {Page2} from './Pages/Page2'
import { Users } from './Pages/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = '/one' element = {<Page1 />} />
        <Route path = '/two' element = {<Page2  />} />
        <Route path = '/users' element = {<Users  />} />

      </Routes>
   
    </div>
  );
}

export default App;
