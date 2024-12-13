import React, { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Register from "./Register";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (count) => {
    setCount(count);

    if (window.ReactNativeWebView) {
      alert("window.ReactNativeWebView: found");
      window.ReactNativeWebView.postMessage(count);
    } else {
      alert("window.ReactNativeWebView: not found");
    }
    console.log("count: ", count);
  };

  const alertMe = () => {
    alert("Hello World");
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1>Deeplinking with React Native</h1>
              <div className="card">
                <button onClick={() => updateCount(count + 1)}>
                  count is {count}
                </button>

                <button onClick={alertMe}>Alert Me</button>
              </div>
            </React.Fragment>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
