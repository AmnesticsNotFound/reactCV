import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import './App.css'

function App() {
  const [information, setInformation] = useState({})

  function greet() {
    console.log("greetings")
  }

  
  return (
    <>
      <h2>CV</h2>
      <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3> 
      </div>
      
    
    </>
    /*<>
    <Section2></Section2>
      <Section3></Section3>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>*/
  )
}

export default App
