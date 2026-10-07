import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='text-blue-500'>
      <Navbar></Navbar>
      <Card></Card>
      <Card></Card>
      
    </div>
  )
}

export default App