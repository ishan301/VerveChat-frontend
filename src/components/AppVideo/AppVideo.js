import React from 'react'
import './AppVideo.scss'
import Header from '../Header/Header';
import Login from '../Login/Login';

function AppVideo() {
  return (
    <div className='app-video'>
      <Header/>
      <div className='app-video-box'>
        <Login/>
      </div>
    </div>
  )
}

export default AppVideo;