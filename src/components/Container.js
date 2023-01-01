import React from 'react'
import Buttons from './Buttons';
import Header from './Header';
import {useTheme} from '../context/ThemeContext';
import Profile from './Profile';

function Container() {
    const {theme} = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Header></Header>
      <Buttons></Buttons>
      <Profile></Profile>
    </div>
  )
}

export default Container
