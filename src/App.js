import React, { useState } from "react";
import LoginForm from "./Components/LoginForm";

function App() {
  const adminUser = {  // thing we check login details against 
    //TODO: hook this up to a server if using in the future 
    email: "gboss0352@gmail.com",
    password: "admin123"
  }; 

  const [user, setUser] = useState({name:"", email:""}); 
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in!")
      setUser({
        name: details.name,
        email: details.email
      }); 
    } else {
      setError("Details do not match"); 
    }
  }

  const Logout = () => {
    setUser({name:"", email:""}); 
  }

  return (
   <div className="App" >
    {(user.email != "") ? (
      <div className="welcome" >
        <h2>welcome, <span>{user.name}</span></h2>
        <button onClick={Logout} >Logout</button>
      </div>
    ) : (
      <LoginForm Login={Login} error={error}  /> 
    )}
   </div>
  );
}

export default App;
