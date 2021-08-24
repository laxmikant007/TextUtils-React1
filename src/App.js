
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#112d57'
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'

  }
}
  return ( 
  <>
  {/* <Router> */}
  <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}  />
  <div className= "container my-3">
    
  {/* <Switch>
          <Route exact path="/about"> */}
          {/* </Route>
         
        <Route  exact path="/"> */}
            {/* </Route>
        </Switch> */}
        <Textform heading= "Enter the Text to analyze!" mode={mode}/>
        <About />
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;
