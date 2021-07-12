import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import Axios from "axios";

export default function Login()  {
  

  const [username ,setUsername]= useState("");
  const [password ,setPassword]= useState("");

  const [loginStatus, setLoginStatus] = useState("");
  
  const mylogin =() =>{ 
    Axios.post("http://localhost:3001/mylogin", {
      username: username,
      // phone:phoneReg,
      password: password,

}).then((response)=>{
  if (response.data.message) {
    setLoginStatus(response.data.message);
  } else {
    setLoginStatus(response.data[0].username+"login");
  }  
});
};


    return (
      <motion.div 
      initial={{opacity: 0}}
		  animate={{opacity:1}}
		  exit={{opacity: 0 }}
      className="base-container" >
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src="/assets/images/login.svg" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" 
              onChange={(e) =>{
                setUsername(e.target.value);
              }}
               />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"
              onChange={(e) =>{
                setPassword(e.target.value);
              }}
               />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={mylogin} >
            Login
          </button >

          <h1>{loginStatus}</h1>
        </div>
      </motion.div>
    );
  }