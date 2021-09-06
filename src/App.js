import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  // const [mode1,setmode1]=useState('light');
  const [alert, setalert] = useState(null)
  const showalert = (message) => {
    if (mode === 'dark') {
      setalert({ message: message })
    }
    else {
      setalert({ message: message })
    }
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showalert("Dark mode is enabled")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enabled")
    }
  }
  const greymode = () => {
    if (mode === 'light') {
      setmode('secondary');
      document.body.style.backgroundColor = 'grey';
      showalert("Grey mode is enabled")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enabled")
    }
  }
  return (
    <>
    <Router>
      <Navbar title='Trial React' mode={mode} togglemode={togglemode} greymode={greymode} />
      <Alert show={alert} showalert={showalert} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <div className="container">
            <Textarea heading="Enter anytext here:" mode={mode} togglemode={togglemode} />
          </div>
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;

