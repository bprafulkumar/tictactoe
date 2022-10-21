import React from "react";

const History = (props) => { 
    console.log(props)
    return (
        <div className="history-wrapper ">
       <ul className="history">
            {
                props.history.map((val,move)=>{
                    // console.log(val)
                return ( 
                <li key={move}>
                    <button className={`btn-move ${move === (props.currentmove) ? 'active' : ' '}`} onClick={()=>{props.moveTo(move)}}>
                        {move===0 ? "Start the game" : `Go to the move #${move}`}
                    </button>
                </li> )
                })
            }
       </ul>
       </div>
    )
}

export default History