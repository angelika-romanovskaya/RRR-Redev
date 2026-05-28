import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { LifecycleComponent } from './components/LifecycleComponent'
import { FuncLifecycleComponent } from './components/FuncLifecycleComponent'

function App() {
  return <>
    <LifecycleComponent/>
    <FuncLifecycleComponent/>
  </>
}

export default App
