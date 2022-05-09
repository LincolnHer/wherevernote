// frontend/src/components/LoginFormPage/index.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import BackgroundImage from "../../assets/5630974.jpg";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  if (sessionUser) return <Redirect to="/home" />;

  const demoUser = async () => {
    dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className="backgroundImg-auth" style={backgroundStyle}>
      <form className="auth-forms" onSubmit={handleSubmit}>
        <div className="container">
        <ul className="errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
          <header>
            <h1 className="auth-note-title">Wherevernote</h1>
          </header>
          <h2>Remember your notes whenever, wherever</h2>
          <input
            className="inputs"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Username or Email"
            required
          />
          <input
            className="inputs"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <div>
            <button type="submit" className="btn">
              Log In
            </button>
            <button onClick={demoUser} className="btn">
              Demo User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;
