import React, { useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'; // Import the useHistory hook


import noteContext from './../Context/NoteContext';
import './AddNote.css';
import { Navbar } from './Navbar';
import Addfile from './Addfile/Addfile';
import Currency from './Currency';



function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote, getNotes, notes } = context;
  const navigate=useNavigate();

  const [note, setNote] = useState({ username: '', name: '', inemail: '', phone: '' });
  const [chartData, setChartData] = useState({ usernames: [], prices: [] ,bill:[]});

  useEffect(() => {
    // Fetch all notes from the database when the component mounts
    getNotes();
  }, [getNotes]);

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.username, note.name, note.inemail, note.phone,note.date);
    setNote({ username: '', name: '', inemail: '', phone: '',date:'' });
   

  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Extract usernames and prices from the fetched notes
    const usernames = notes.map((entry) => entry.username);
    const prices = notes.map((entry) => entry.phone);
    const dates = notes.map((entry) => entry.date);
    const bill=notes.map((entry)=>entry.inemail);
    setChartData({ usernames, prices,dates,bill });
  }, [notes]);
  const navigateTolinechart=()=>{
    console.log('Usernames:', chartData.usernames);
  console.log('Prices:', chartData.prices);
  console.log('bill',chartData.bill);
    navigate("/linechart", {
      state: {
        usernames: chartData.usernames,
        prices: chartData.prices,
        dates:chartData.dates,
        bill:chartData.bill,
      }
    });
    

  }
  const navigateToPiechart=()=>{
    console.log('Usernames:', chartData.usernames);
  console.log('Prices:', chartData.prices);
  console.log('bill',chartData.bill);
    navigate("/piechart", {
      state: {
        usernames: chartData.usernames,
        prices: chartData.prices,
        dates:chartData.dates,
        bill:chartData.bill,
      }
    });
    
  }
  const navigateToBarchart=()=>{
    console.log('Usernames:', chartData.usernames);
  console.log('Prices:', chartData.prices);
  console.log('bill',chartData.bill);
    navigate("/barchart", {
      state: {
        usernames: chartData.usernames,
        prices: chartData.prices,
        dates:chartData.dates,
        bill:chartData.bill,
      }
    });
    
  }






  return (
    <>
   



     <div  className='add-note-container'>
    
            
        <div className="login-box">
       
       
          <h2>Simplifying Transaction</h2>
          <form>
            <div className="user-box">
            <select
            className='expenses'
    id="username"
    name="username"
    value={note.username}
    onChange={onChange}
    required
  >
    <option value="">Select an Expense</option>
    <option  className='option'value="Games">Games</option>
    <option  className='option'value="Movies">Movies</option>
    <option  className='option'value="Music">Music</option>
    <option  className='option'value="Sports">Sports</option>
    <option  className='option'value="Groceries">Groceries</option>
    <option  className='option'value="Dinning out">Dining out</option>
    <option  className='option'value="Mortgage">Mortgage</option>
    <option  className='option'value="Household suppllies">Household suppllies</option>
    <option  className='option'value="Furniture">Furniture</option>
    <option  className='option'value="Maintenance">Maintenance</option>
    <option  className='option'value="Pets">Pets</option>
    <option  className='option'value="Services">Services</option>
    <option  className='option'value="Electronics">Electronics</option>
    <option  className='option'value="Insurance">Insurance</option>
    <option  className='option'value="Clothing">Clothing</option>
    <option  className='option'value="Gifts">Gifts</option>
    <option  className='option'value="Medical">Medical</option>
    <option  className='option'value="Taxes">Taxes</option>
    <option  className='option'value="Education">Education</option>
    <option  className='option'value="Childcare">Child care</option>'
    <option  className='option'value="Parking">Parking</option>
    <option  className='option'value="Bus/Train">Train</option>
    <option  className='option'value="Hotel">Hotel</option>
    <option  className='option'value="Electricity">Electricity</option>
    <option  className='option'value="Heat/gas">Gas</option>
    <option  className='option'value="Water">Water</option>
    <option  className='option'value="Tv/phone">Tv/phone</option>
    <option  className='option'value="Cleaning">Cleaning</option>
    <option value="Vegetables"other>Other</option>
    {/* Add more options as needed */}
  </select>
            </div>
            <div className="user-box">
              <input
                type="number"
                id="phone"
                name="phone"
                required
                value={note.phone}
                onChange={onChange}
              />
              <label>Prices</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                id="name"
                name="name"
                required="true"
                value={note.name}
                onChange={onChange}
                minLength={5}
              />
              <label>More Information</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                id="inemail"
                name="inemail"
                required="true"
                value={note.inemail}
                onChange={onChange}
                minLength={5}
              />
              <label>Bill Information</label>
            </div>
    
            <button className='button2' onClick={handleClick}>Get your Transaction</button>
  
          
            {/* <Graph usernames={chartData.usernames} prices={chartData.prices} /> */}
           

            

           
          </form>
          <div className='multibutton'>
          <button className='button-56' onClick={navigateTolinechart}>Line Chart</button>
          <br/>
          <button className='button-56' onClick={navigateToPiechart}>Pie Chart</button>
          <br/>
          <button className='button-56' onClick={navigateToBarchart}>Bar Chart</button>
          </div>
         
          <Currency/>
          
     
        </div>
        </div>
       

       
      
 
     
  
  
     
  
    </>
  );
}

export default AddNote;