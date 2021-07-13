import React from 'react';
import './global.css'
import SideBar from './Components/SideBar';
import Search from './Components/Search';

function App() {
  return (
    <div className='body'>
      <SideBar/>
      <div className='information'>
        <Search/>
      </div>
    </div>
  );
}

export default App;
