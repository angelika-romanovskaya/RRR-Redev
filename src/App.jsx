import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { NumberComp } from './components/NumberComp'
import { StringComp } from './components/StringComp'
import { ObjectComp } from './components/ObjectComp'
import { FunctionComp } from './components/FunctionComp'
import { ArrayComp } from './components/ArrayComp'
import { BooleanComp } from './components/BooleanComp'

function App() {
  return <>
    <NumberComp num={23}/>
    <StringComp str='Redev'/>
    <BooleanComp bool={false}/>
    <ObjectComp obj={{name: 'Angelika', age: 23}}/>
    <FunctionComp func={() => 'Function Compoent'}/>
    <ArrayComp array={[1, 3, 5, 6, 8]}/>
  </>
}

export default App
