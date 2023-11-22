import React, { useState } from 'react';
import './Front.css'; // Import the CSS file
import { Navigate, json, useNavigate } from 'react-router-dom';
import { ChatState } from './../Context/ChatProvider';
import About from './About';
import Footer from './Footer';





const Homepage = (props) => {
  
  const {user}=ChatState('');

    const navigate=useNavigate()
    const switchtoaddnote=()=>{
      console.log(localStorage.token)
    
   
        navigate('/note')
    

    }
    const switchtoChatpage=()=> {
      console.log(localStorage.token);
     
      navigate('/chats')
    }
  const switchtoBillpage=()=>{
    navigate('/recipt')
  }
  const switchtoMarket=(key)=> {
    navigate('/market')
  }
  const switchtocontact=(key)=> {
    navigate('/contact')
  }
  const switchtoabout=()=>{
    navigate('/about')
  }
 const switchtoaddfile=()=>{
  navigate('/addfile')
 }
  
 
  
   



  

  return (
    <>

      
<main className="site-wrapper">
  <div className="pt-table desktop-768">
    <div
      className="pt-tablecell page-home relative"
      style={{
        marginTop:"-1300px",
       
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            <div className="page-title  home text-center">
              <span className="heading-page"> Hii  Welcome to Our Website</span>
              <p className="mt20">
              Welcome to our transaction management platform! Explore a world of streamlined financial organization and effortless tracking. Simplify your transactions, manage expenses, and stay in control of your finances with our intuitive tools. Start optimizing your financial journey today
              </p>
            </div>
            <div className="hexagon-menu clear">
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content"
                onClick={switchtoaddnote}>
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-universal-access" />
                    </span>
                    <span className="title">Add Plan</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content"
                onClick={switchtoBillpage}>
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-bullseye" />
                    </span>
                    <span className="title">Your Bill Page</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content"
                onClick={switchtoMarket}>
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-braille" />
                    </span>
                    <span className="title">Current Market</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content"
                onClick={switchtoChatpage}>
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-id-badge" />
                    </span>
                    <span className="title">friend Transaaction</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item"
            >
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a  onClick={switchtoaddfile} className="hex-content"
              >
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-life-ring" />
                    </span>
                    <span  className="title">Add your Recipt</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content
                "onClick={switchtocontact}>
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-clipboard" />
                    </span>
                    <span className="title">Contact us</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content"onClick={switchtoabout}>
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-map-signs" />
                    </span>
                    <span className="title">About us</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<div class="image-container">
  
</div>
<Footer/>



 
      





 



    
    
     
     
  
    </>
  );
};

export default Homepage;