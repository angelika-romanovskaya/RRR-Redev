import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { UserProfile } from './components/UserProfile'
import { ToDoList } from './components/ToDoList'
import { Basket } from './components/Basket'

function App() {
  return <>
    <UserProfile/>
    <ToDoList/>
    <Basket/>
  </>
}

export default App
