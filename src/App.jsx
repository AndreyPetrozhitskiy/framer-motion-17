import { useState } from 'react'
import "./style/app.scss"
import TodoApp from './components/TodoApp.jsx'

function App() {
  

  return (
    <div className='App'>
        <div className='App__container'>
          <TodoApp />
        </div>
    </div>
  )
}

export default App
