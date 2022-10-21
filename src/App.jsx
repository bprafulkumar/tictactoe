import React,{ useState } from "react";
import "./root.scss"
import Board from "./components/Board";
import calculateWinner from "./winner"



const App = () => {
  const [board , setBoard] = useState(Array(9).fill(null))
  const [Xnext , setXnext] =useState(false)
  // console.log(Value)
  // console.log(board)
  const winner = calculateWinner(board)

  const message = winner ? `winner is ${winner}` : `Next player is ${Xnext ? "O" : "X"}`
  

  const handlesquareclick = (position) => {
    if(board[position]){
      return
    }      
      setBoard(prev => {
         return prev.map((val,pos) => {
           if(pos === position){
              return Xnext ? "X" : "O";
           }
           return val;
         })
      })
      setXnext((prev) => !prev)
  }

  // const winner = calculateWinner()
  // console.log(winner)
  return (
    <div className="app">
      <h1>Welcome to React Vite Micro App!</h1>
      <h2>{`The leadershipboard: ${message}`}</h2>
      <Board board={board} handlesquareclick={handlesquareclick} />
    </div>
  )
}

export default App