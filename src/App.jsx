import { useState } from 'react'
import './App.css'
import Category from './components/Category'
import Form from './components/Form'

function App() {
  const [name, setName] = useState('Hi Aya');

  return (
    <div className="App">
      <Category />
      <Form name={name} />
      
    </div>
  )
}

export default App
