import './App.css';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import homepage from './pages/Home';
import chatpage from './pages/Chat';
import loginpage from './components/Authentication/Login';
import signup from './components/Authentication/Signup';
import Frontpage from './components/Frontpage';

import About from './components/About';

import Notes from './components/Notes';
import Noteitem from './components/Noteitem';
import Linechart from './components/Chart/Linechart';
import BarChart from './components/Chart/BarChart';
import Piechart from './components/Chart/Piechart';
import AddNote from './components/AddNote';
import NoteState from './Context/NoteState';
import Alert from './components/Alert';
import SearchBar from './components/SearchBar';
import { Navbar } from './components/Navbar';
import Market from './components/Market';
import Contact from './components/Contact';
import Addfile from './components/Addfile/Addfile';

import Footer from './components/Footer';
import { Toppage } from './components/Toppage';
import Currency from './components/Currency';
import { Textimonial } from './components/Textimonial';
import Recipt from './components/Recipt/Recipt';




function App() {
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2500);
  }
  return (
    <div className="App">
    <Alert alert={alert} />
    <Navbar/>

        
        <Routes>
        
        <Route path='/'Component={homepage} exact/>
      <Route path='/chats'Component={chatpage}/>
      <Route path='/login' Component={loginpage}/>
      <Route path='/signup' Component={signup}/>
   
      <Route element={<Frontpage />} exact path='/front' ></Route>
        
      <Route element={<About />} exact path='/about' ></Route>
        
      <Route element={<NoteState><AddNote showAlert={showAlert} /></NoteState>} exact path='/addnote' ></Route>
      <Route element={<NoteState><Recipt /></NoteState>} exact path='/recipt' ></Route>
        
     
        
      <Route element={<NoteState><Noteitem showAlert={showAlert} /></NoteState>} exact path='/noteitem' ></Route>
      <Route element={<NoteState><Linechart /></NoteState>} exact path='/linechart' ></Route>
      <Route element={<NoteState><BarChart /></NoteState>} exact path='/barchart' ></Route>
      <Route element={<NoteState><Piechart /></NoteState>} exact path='/piechart' ></Route>
      <Route element={<NoteState><Notes showAlert={showAlert}/></NoteState>} exact path='/note' ></Route>
      <Route element={<NoteState><SearchBar showAlert={showAlert} /></NoteState>} exact path='/search' ></Route>
      <Route element={<Market/>} exact path='/market' ></Route>
      <Route element={<Contact/>} exact path='/contact' ></Route>
      <Route element={<Addfile/>} exact path='/addfile' ></Route>
      <Route element={<Footer/>} exact path='/footer' ></Route>
      <Route element={<Textimonial/>} exact path='testimonial' ></Route>
      
      <Route element={<Toppage/>} exact path='/top' ></Route>
      <Route element={<Currency/>} exact path='/currency' ></Route>
      
        </Routes>
       
        
    
    </div>
  );
}

export default App;
