import React from "react";

const Statusmessage = (props) => {
    // console.log(props.winner)
    // const message = props.winner ? `Winner is ${props.winner}` : `Next player is ${current.Xnext ? "O" : "X"}`


    const NoMoveLeft = props.current.board.every((val) => {
           return val!== null
    })
    return(
        <div className="status-message">
       {props.winner && <> Winner is <span className={props.winner === "X" ? "text-green": "text-orange"}>{props.winner}</span></>}
        {!(props.winner) && !NoMoveLeft &&
        <>
        Next player is <span className={props.current.Xnext ? 'text-green' : 'text-orange'}>{props.current.Xnext ? "O" : "X" }</span>
        </>
        }

        {!(props.winner) && NoMoveLeft && 
        <>
        <span className="text-green">X</span> and <span className="text-orange">0</span> Are Tied
        </>
        }
        
        </div>
    )
}

export default Statusmessage