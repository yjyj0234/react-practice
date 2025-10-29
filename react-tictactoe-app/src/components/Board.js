import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({squares,onClick}) => {
    // const handleClick = (i) => {
    //     const newSquares=squares.slice();  
    //     if(calculateWinner(newSquares) || newSquares[i]) //이미 승자가 있거나 클릭한 칸이 이미 채워져있으면 무시
    //     {
    //         return; //리턴하면 더이상 진행안됨
    //     }

    //     newSquares[i] = xIsNext ? 'X': 'O'; 
    //     setSquares(newSquares);
    //     setxIsNext(!xIsNext);    
    // }
//과거의 squares 배열들을 history 라는 다른 배열에 저장할 것. history 배열은 첫 동작부터 마지막 동작 까지 
//모든 게임판의 상태를 표현하고 아래와 같은 형태 
// history = [
/* 첫 동작이 발생하기 전
null, null, null,
null, null, null,
null, null, null,

// 첫 동작이 발생한 이후

squares: [
null, null, null,
null, 'X', null,
null, null, null,

]

// 두 번째 동작이 발생한 이후

squares: [
null, null, null,
null, 'X', null,
null, null, '0',
]
*/


    const renderSquare = (i)=>{
        //square 컴포넌트로 숫자 넘겨주기(props사용)
        return <Square value={squares[i]} 
            onClick={()=> onClick(i)}/>;
    }

 
        return(
            <div className="board-wrapper">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}

                    {/* ordered list 순서있는 리스트*/}
            
                </div>
            </div>
        )   
}
export default Board;