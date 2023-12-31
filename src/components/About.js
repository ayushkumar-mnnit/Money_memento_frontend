import React from 'react'
import './About.css'

import { Navigate, useNavigate } from 'react-router-dom'



const About = () => {
  
  return (
    <>
  
   
    <div className='wrapunderc'>
    
      <h1 className='wraphead'>We Provide</h1>
     
    <div className="ag-format-container">
  <div className="ag-courses_box">
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Add Your Transaction
          
        </div>
        
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
      Perform complete update and delete operation 
        </div>
      
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          Obtain your Data in sorted with Date form
        
        </div>
       
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          Search Your Data by Expenses
        </div>
      
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
           Add your Expenses in diffrent Currency
        </div>
       
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Download pdf of each expenses
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
       See Line chart pie chart and bar chart of your expenses
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
Download your Transaction Recipt
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
       Current Market Data
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
         Split your Expenses among friends
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Create a Group Expenses 
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
       Proper Notification
        </div>
      </a>
    </div>
    

  
   
  </div>

  

</div>
<h1 className='teamhead'>About creator</h1>
<div className='combined'>
<div className="card-container">

  <img
    className="round"
    src="https://media.licdn.com/dms/image/D4E03AQGwExjVfOqE5Q/profile-displayphoto-shrink_100_100/0/1687794294297?e=1705536000&v=beta&t=VaDn7Zcc6dAO9N0JHGwVn6os_9sssuYDSCnyCMchbrY"
    alt="user"
  />
  <h3>Ayush Kumar</h3>
  <h6>Full Stack web developer</h6>
  <p>
  Explore our services and manage your transactions with ease. If you have any questions or need assistance, feel free to reach out to our support team.
  </p>
  <div className="buttons">
    <button className="primary">Message</button>
   
  </div>
  <div className="skills">
    <h6>Skills</h6>
    <ul>
    <li>UI / UX</li>
      <li>Front End Development</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
      <li>Express.js</li>
      <li>Mongodb</li>
    </ul>
  </div>
</div>
<div className="card-container">
  
  <img
    className="round"
    src="https://media.licdn.com/dms/image/D4D03AQEv-N_telX5iw/profile-displayphoto-shrink_100_100/0/1689699598791?e=1705536000&v=beta&t=mzAcbAw2BRmDwJ9H3SVf9f1_CTfoeyis9yV0aGm75y8"
    alt="user"
  />
  <h3>Anupam Singh</h3>
  <h6>Full stack Web developer</h6>
  <p>
  Stay informed about your transactions with real-time updates and notifications. Your financial journey is important to us, and we're committed to ensuring it's secure and convenient.
  </p>
  <div className="buttons">
    <button className="primary">Message</button>
 
  </div>
  <div className="skills">
    <h6>Skills</h6>
    <ul>
      <li>UI / UX</li>
      <li>Front End Development</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
      <li>Express.js</li>
      <li>Mongodb</li>
      
    </ul>
  </div>
  </div>
  </div>


</div>

    </>

   
  )
}

export default About