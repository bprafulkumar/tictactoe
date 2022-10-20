import React from "react";
import Board from "./components/Board";
import "./root.scss"


const App = () => {
  return (
    <div className="app">
      <h1>Welcome to React Vite Micro App!</h1>
      <Board/>
    </div>
  )
}

export default App