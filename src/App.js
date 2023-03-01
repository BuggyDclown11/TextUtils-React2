//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navi";
import BasicExample from "./Navi";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
//import About from "./components/About";
// import TextForm from "./components/TextForm";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has beeen enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <BasicExample title={3} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Navbar mode={mode} showalert={showAlert} />
      {/* <Routes>

          <Route exact path="/About" element={<About />} />
          {/* <Route exact path="/" element={<Home />} /> */}
      {/* <Route
            exact
            path="/Navbar" */}
      {/* element={}
          // /> */}

      {/* </Routes>
      </Router> */}
    </>
  );
}

export default App;
