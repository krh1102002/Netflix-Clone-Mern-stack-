import react from 'react';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import './App.css';
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Netflix from "./Pages/Netflix";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/' element={<Netflix/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
