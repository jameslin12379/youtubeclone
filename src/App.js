import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import {SideBar} from './containers/SideBar/SideBar';

function App() {
  return (
      <React.Fragment>
        <HeaderNav/>
        <SideBar/>
      </React.Fragment>
    // {/*<div className="App">*/}
    //   {/*<header className="App-header">*/}
    //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
    //     {/*<p>*/}
    //       {/*Edit <code>src/App.js</code> and save to reload.*/}
    //     {/*</p>*/}
    //     {/*<a*/}
    //       {/*className="App-link"*/}
    //       {/*href="https://reactjs.org"*/}
    //       {/*target="_blank"*/}
    //       {/*rel="noopener noreferrer"*/}
    //     {/*>*/}
    //       {/*Learn React*/}
    //     {/*</a>*/}
    //   {/*</header>*/}
    // {/*</div>*/}
  );
}

export default App;
