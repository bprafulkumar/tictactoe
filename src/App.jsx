import React,{ useState } from "react";
import "./root.scss"
import Board from "./components/Board";
import calculateWinner from "./winner"
import History from "./components/History";
import Statusmessage from "./components/Statusmessage";



const App = () => {

  const NEW_GAME = [{board:Array(9).fill(null),Xnext:true}];
  const [history , setHistory] = useState(NEW_GAME)
  const [currentmove , setCurrentmove] = useState(0)

  // console.log(history)

  const current = history[currentmove]
  // const [Xnext , setXnext] =useState(false)
  // console.log(Value)
  // console.log(board)
  const {winner , winningSquare} = calculateWinner(current.board)
  

  const handlesquareclick = (position) => {
    if(current.board[position] || winner){
      return
    }      
      setHistory(prev => {

        const last = prev[prev.length-1]

         const newBoard = last.board.map((val,pos) => {
           if(pos === position){
              return last.Xnext ? "X" : "O";
           }
           return val;
         })

         return prev.concat({board:newBoard, Xnext:!last.Xnext})
      })
      setCurrentmove((prev) => prev+1)
  }
  const moveTo = (move) => {
    setCurrentmove(move)
  }
  const restart = () => {
   setHistory(NEW_GAME)
    setCurrentmove(0)
  }

  // const winner = calculateWinner()
  // console.log(winner)
  return (
    <div className="app">
      <h1>TIK <span className="text-green">TOK</span> TIK</h1>
      {/* <h2>{`The leadershipboard: ${message}`}</h2> */}
      <Statusmessage winner= {winner} current = {current} />
      <Board board={current.board} handlesquareclick={handlesquareclick} winningSquare = {winningSquare} />

      <button onClick={restart} className={`btn-reset ${winner ? 'active' : '' }`}>Start New Game</button>

        <h1 style={{'fontWeight':"normal"}} >Current Game History</h1>
      <History history = {history} moveTo ={moveTo} currentmove= {currentmove} />
      <div className="bg-balls"/>
    </div>
  )
}

export default App