import React from 'react'
import Count from './components/Count'
import Profiles from './components/Profiles'
import ListUser from './components/ListUser'
import ListProduct from './components/ListProduct'
import RandomNumber from './components/RandomNumber'
import ChangeState from './components/ChangeState'
import ChangeColor from './components/ChangeColor'

export default function App() {
  return (
    <div>
      <Profiles/>
      <ListUser/>
      <ListProduct/>
      <Count/>
      <RandomNumber/>
      <ChangeState/>
      <ChangeColor/>
    </div>
  )
}
