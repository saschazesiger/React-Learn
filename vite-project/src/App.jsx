import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Post} from './components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!!</h1>
      <Post title='Test' message='Example Message'/>
      <Post title='Test' message='Example Message2'/>
      <Post title='Test' message='Example Message3'/>
    </>
  )
}

export default App
