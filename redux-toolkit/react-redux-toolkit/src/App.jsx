import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CakeView from './features/cake/CakeView';
import UserView from './features/user/UserView';
import IceCreamView from './features/icecream/IceCreamView';

function App() {


  return (
    <div className="App">
     <CakeView/>
     <IceCreamView />
     <UserView />
    </div>
  )
}

export default App
