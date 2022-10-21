import React from "react";
import Square from "./Square";


const Board = ({board,handlesquareclick,winningSquare}) => {
    const renderitem = (position) => {

        const isWinningcomponent = winningSquare.includes(position)
        return (<Square value = {board[position]} onClick= {()=>handlesquareclick(position)} isWinningcomponent={isWinningcomponent} />)
    }
    return (
        <div className="board">
            <div className="board-row">
                {renderitem(0)}
                {renderitem(1)}
                {renderitem(2)}
            </div>
            <div className="board-row">
                {renderitem(3)}
                {renderitem(4)}
                {renderitem(5)}
            </div>
             <div className="board-row">
                {renderitem(6)}
                {renderitem(7)}
                {renderitem(8)}
            </div>
        </div>
    )
}

export default Board