import React from 'react'
import Footer from './Footer'
import guide from '../images/guide.png'
import logo from "./../images/logo-2.1.png";
import { useNavigate } from 'react-router-dom';
import { Textimonial } from './Textimonial';

export const Toppage = () => {
    const navigate=useNavigate();
    const navigatetowebsite=()=>
    {
        navigate('/front')
    }
  return (
   <>
   <div className='logo11'>
   <img  src={logo} width={250} alt="Moneymemento" />
   </div>

<section className="banner">
  <div className="container1">
  
 
 
  </div>
</section>
   <img className='gd1' src={guide}  alt="/" />

<div className="abt" id="about">
<div className="jumbotron">
  <div className="container1">
   
    <h3>We Have What You Need !</h3>
    <h3>So what to wait for, let's </h3>    
  <button onClick={navigatetowebsite} href="#portfolio" className="btn btn-default">Get Started!</button>
  </div> 
</div>
</div>
<Textimonial/>

<Footer/>

   </>
  )
}