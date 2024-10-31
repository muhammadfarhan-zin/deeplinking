import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  //  make a function that updates the count and sends a message to react native app that this is the value of count
  const updateCount = (count) => {
    //  send message to react native app
    setCount(count);
    window.ReactNativeWebView.postMessage(count);
    console.log('count: ', count);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Deeplinking with React Native</h1>
      <div className="card">
        <button onClick={() =>
          updateCount(count + 1)
        }>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
