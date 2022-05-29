import React from 'react'
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import 'bootstrap/dist/css/bootstrap.css';

const code = new URLSearchParams(window.location.search).get('code');


const App = () => {

  return code ? <Dashboard code={code}/> : <Login/>
}

export default App
