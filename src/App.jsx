import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { CountComp } from './components/CountComp'
import { HideComp } from './components/HideComp'
import { InputComp } from './components/InputComp'
import { ColorComp } from './components/ColorComp'

function App() {
  return <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
    <CountComp/>
    <HideComp/>
    <InputComp/>
    <ColorComp/>
  </div>
}

export default App
