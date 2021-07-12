import React,{useState} from 'react';
import Axios from "axios";

function FoobarForm(){
   
    const [usernameReg ,setUsernameReg]= useState("");
    const [emailReg ,setEmailReg]= useState("");
    // const [phoneReg ,setPhoneReg]= useState("");
     const [passwordReg ,setpasswordReg]= useState("");

    //  const [username ,setUsername]= useState("");
    //  const [password ,setpassword]= useState("");
    
    //  const [loginStatus ,setloginStatus]= useState("");

    const register =() =>{ 
      Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        email:emailReg,
        // phone:phoneReg,
        password: passwordReg,

 }).then((response)=>{
   console.log(response)  
 });
};

// const login =() =>{ 

//     Axios.post("http://localhost:3001/login", {
//       username: username,
//       password: password,

// }).then((response)=>{
//     if(response.data.message){
//         setloginStatus(response.data.message)
//     }
//     else{
//         setloginStatus(response.data[0].username)
//     }
// });
// };
  return(

    <div>
      <div>
        <h1>Register</h1>
        <div>
        <label>UserName:</label>
        <input type="text" 
        onChange={(e) =>{
          setUsernameReg(e.target.value);
        }} required />
        </div>
        <div>
        <label>Email:</label>
           <input type="email"  onChange={(e) =>{
          setEmailReg(e.target.value);
        }} required />
        </div>

       {/* <label>phone:</label>
           <input type="integer"  onChange={(e) =>{
          setPhoneReg(e.target.value);
        }} required /> */}

        <label>Password</label>
        <input type="password" onChange={(e) =>{
          setpasswordReg(e.target.value);
        }} required />
        <button onClick={register}>Register</button>
      </div>

      {/* <div>
          <h1>Login</h1>

          
        <label>UserName</label>
        <input type="text" onChange={(e) =>{
          setUsername(e.target.value);
        }} />

     <label>Password</label>
        <input type="password" onChange={(e) =>{
          setpassword(e.target.value);
        }} />
        <button onClick={login}>login</button>
      </div>
   <h1>{loginStatus}</h1> */}
    </div>
  );
}
export default FoobarForm;



// import React from "react";
// import { motion } from "framer-motion";

// export default function FoobarForm() {

//     return (
//       <motion.div 
//       initial={{opacity: 0}} 
// 		  animate={{opacity:1}}
// 		  exit={{opacity: 0 }}
//       className="base-container" >

//         <div className="header">Register</div>
//         <div className="content">
//           <div className="image">
//             <img src="/assets/images/login.svg" />
//           </div>
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input type="text" name="username" placeholder="username" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" name="email" placeholder="email" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input type="text" name="password" placeholder="password" />
//             </div>

//             {/* <div className="form-group">
//               <label htmlFor="password">Phone Number</label>
//               <input type="integer" name="Phone" placeholder="Phone Number" />
//             </div> */}
            
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Register
//           </button>
//         </div>
//       </motion.div>
//     );
//   }