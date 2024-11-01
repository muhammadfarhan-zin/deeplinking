import { useState } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (count) => {
    setCount(count);

    if (window.ReactNativeWebView) {
      alert('window.ReactNativeWebView: found');
      window.ReactNativeWebView.postMessage(count);
    }else{
      alert('window.ReactNativeWebView: not found');
    }
    console.log('count: ', count);
  };

  const alertMe = () => {
    alert('Hello World');
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
        <button onClick={() => updateCount(count + 1)}>
          count is {count}
        </button>

        <button onClick={alertMe}>
          Alert Me
        </button>
      </div>
    </>
  );
}

export default App;
