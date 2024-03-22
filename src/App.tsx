import './App.css'
import ApppBar from './components/ApppBar.tsx'
import Menuu from './components/Menuu.tsx'


import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <ApppBar />
    </div>
    <div>
    <Menuu />
    </div>
      <h1>Новости</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          прибавь цифру {count}
        </button>
        <p>
          Ну<code>...</code> типа привет
        </p>
      </div>
      <p className="read-the-docs">
        что происходит
      </p>
    </>
  )
}

export default App
