import { useState } from "react";

const App = () => {
  const [result, Setresult] = useState("");
  const click = (e) => {
    Setresult(result.concat(e.target.name));
  };
  const clear = () => {
    Setresult("");
  };
  const backspace = () => {
    Setresult(result.slice(0, -1));
  };
  const calculate = () => {
    Setresult();
  };

  return (
    <>
      <div className="container">
        <form action="">
          <input
            type="text"
            value={result}
          />
        </form>
        <div className="keyboard">
          <button onClick={clear}>Clear</button>
          <button onClick={backspace}>C</button>
          <button
            name=""
            onClick={click}
          >
            &divide;
          </button>
          <button
            name=""
            onClick={click}
          >
            7
          </button>
          <button
            name=""
            onClick={click}
          >
            8
          </button>
          <button
            name=""
            onClick={click}
          >
            9
          </button>
          <button
            name=""
            onClick={click}
          >
            &times;
          </button>
          <button
            name=""
            onClick={click}
          >
            4
          </button>
          <button
            name=""
            onClick={click}
          >
            5
          </button>
          <button
            name=""
            onClick={click}
          >
            6
          </button>
          <button
            name=""
            onClick={click}
          >
            &ndash;
          </button>
          <button
            name=""
            onClick={click}
          >
            1
          </button>
          <button
            name=""
            onClick={click}
          >
            2
          </button>
          <button
            name=""
            onClick={click}
          >
            3
          </button>
          <button
            name=""
            onClick={click}
          >
            +
          </button>
          <button
            name=""
            onClick={click}
          >
            0
          </button>
          <button
            name=""
            onClick={click}
          >
            .
          </button>
          <button
            name=""
            onClick={click}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
