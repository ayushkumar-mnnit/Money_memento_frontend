import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { ChatState } from '../Context/ChatProvider';

const Contact = () => {
    // LinkedIn button click event handler
const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/anupam-singh-20181024b/', '_blank');
    // Replace 'https://www.linkedin.com/' with your LinkedIn profile URL
  };
  const Navigate=useNavigate();
  const switchtoteam=()=>{
    Navigate('/about')
  }
  // Gmail button click event handler

  const handlePhoneClick = () => {
    window.location.href = 'tel:8187928603';
    // Replace '+1234567890' with your phone number
  };
  const handleGitClick=()=>{
    window.open('https://github.com/anupamxy','_blank')
  }
  const  sendEmail=()=> {
    const recipient = 'anupam2k321@gmail.com';
    const subject = 'Money Momento';
    const body = document.getElementById('emailBody').value;
  
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  }
  
  const {user}=ChatState();
  
  // Render the Gmail button with the onClick event
 

  return (
    <>
    <div className='contact'>
    <div className="container d-flex justify-content-center">
  <div className="card p-3 py-4">
    <div className="text-center">
      <img
        src={user.pic}
        width={100}
        className="rounded-circle"
      />
      <h3 className="mt-2"> Hii {user.name}</h3>
      <span className="mt-1 clearfix">Pitch to us By</span>
      <div className="row mt-3 mb-3">
        <div className="col-md-4">
        <button onClick={handlePhoneClick} className='glowing-btn'> Whatsapp</button>
        </div>
        <div className="col-md-4">
       <button onClick={handleLinkedInClick} className='glowing-btn'> linkedin</button>
        </div>
        <div className="col-md-4">
        <button onClick={handleGitClick} className='glowing-btn'> Github</button>
        </div>
      </div>
      <hr className="line" />
      <small className="mt-4">
      Welcome to our transaction management website, where every click streamlines your financial journey
      </small>
      <i className="fa fa-facebook-official" aria-hidden="true"></i>
      <div className="profile mt-5">
        <button onClick={switchtoteam} className="profile_button px-5">View Our Team</button>
      </div>
    </div>
    <textarea  className='text1' id="emailBody" placeholder="Enter your message"></textarea>
<button  onClick={sendEmail}>Send Email</button>
  </div>
</div>
</div>
=



  </>
  )
}

export default Contact

