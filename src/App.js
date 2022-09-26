import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [pas, setPas] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You are Succesfully Registered`);
  };

  return (
    <div className="box">
      <div className="forms">

        <h1 className="heading">Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="paswor"
            value={pas}
            onChange={(e) => setPas(e.target.value)}
          />
          <a href={null}>forgetpassword?</a>

          <button type="submit">
            <b>Login</b>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
