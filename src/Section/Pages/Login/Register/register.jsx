import React,{useState} from "react";
import {motion } from "framer-motion";
import Axios from "axios";


export default function Register()  {

    const [usernameReg ,setUsernameReg]= useState("");
    const [emailReg ,setEmailReg]= useState("");
    const [passwordReg ,setpasswordReg]= useState("");

    const myregister =() =>{ 
      Axios.post("http://localhost:3001/myregister", {
        username: usernameReg,
        email:emailReg,
        // phone:phoneReg,
        password: passwordReg,

 }).then((response)=>{
   console.log(response)  
 });
};


    return (
      <motion.div 
      initial={{opacity: 0}} 
		  animate={{opacity:1}}
		  exit={{opacity: 0 }}
      className="base-container" >

        
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src="/assets/images/login.svg" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"
              onChange={(e) =>{
                setUsernameReg(e.target.value);
              }} required
               />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              
              <input type="email" name="email" placeholder="email" 
              onChange={(e) =>{
                setEmailReg(e.target.value);
              }} 
              required/>

            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" 
              onChange={(e) =>{
                setpasswordReg(e.target.value);
              }} required
              />
            </div>
{/* 
            <div className="form-group">
              <label htmlFor="password">Phone Number</label>
              <input type="integer" name="Phone" placeholder="Phone Number" />
            </div> */}
            
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn" onClick={myregister}>
            Register
          </button>
        </div>
      </motion.div>
    );
  }