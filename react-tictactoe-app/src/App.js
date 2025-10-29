import { useState } from 'react';
import './App.css';
import Board from './components/Board';
function App() {

  const [history,setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext,setxIsNext] = useState(true);
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [stepNumber, setStepNumber] = useState(0);
   

  
const calculateWinner = (squares) =>{
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]   
        for(let index=0; index<lines.length; index++){
            const [a,b,c] = lines[index];
            if(squares[a] && squares[a]===squares[b]&&squares[a]===squares[c]){
                return squares[a];  //x인지 o인지 반환
            }
        }
        return null;
     }
  //index 는 0, 1,2 인데 length 는 1,2,3
  const current = history[stepNumber];
  
  const winner = calculateWinner(current.squares);

   let status;
    
    if(winner){
        status = 'Winner: '+winner;
    }else{
        status = `Next player :  ${xIsNext ? 'X':'O'}`;
    }

    const handleClick = (i) =>{
      const newHistory = history.slice(0, stepNumber+1); //처음은 stepNumber가 0이라 slice(0,1)->jumpTo로 이동한 곳의 새로운
      //history와 새로운 cururent로 생성

      
      const newCurrent = newHistory[newHistory.length-1];//newhistory의 현재 아이템만

      const newSquares = current.squares.slice(); //원본의 복사본을 가져와서 수정 , //아무것도 안넣으면 모든 square 배열 복사
      
      if(calculateWinner(newSquares)|| newSquares[i]) //이미 승자가 있거나 클릭한 칸이 이미 채워져있으면 무시
      {
        return;   //더이상 진행 안됨
      }
      newSquares[i] =xIsNext ? 'X' : 'O' ;  //xIsNext가 true면 X,false면 O

      setHistory([...newHistory,{squares: newSquares}]); //전개연산자 이용 원래있던 history들을 하나씩 넣어줌(원본 newsquares로 복사해서)
      setxIsNext(prev => !prev);   //xIsNext값 반전
      setStepNumber(newHistory.length);
    }

    const moves = history.map((step,move)=>{
      const desc = move ? 
      'Go To Move #' + move : 
      'Go To Game Start';
      return (  
        //JSX Key 속성 : 요소의 리스트를 나열할 때 쓰임   key에는 유니크한 값을 넣어줍니다.(index는 비추천!)
        //index도 0부터 시작해서 유니크한 값을 가지지만 만약 리스트가 추가되거나 제거되면 해당 리스트들의 key값도 바뀌게 됩니다.
        <li key={move}> 
          <button onClick={()=>jumpTo(move)} className='move-button'>{desc}</button>
        </li>
      )
    })

    const jumpTo = (step) =>{
      //stepNumber를 업데이트하기 위해 jumpTo를 정의, stepNubmer가 짝수일 때마다 xIsNext 를 true로 설정
      setStepNumber(step);
      setxIsNext((step % 2)===0);
    }
  return(
    <div className="game">
      <div className="game-board">
        {/* squares,onClick 이라는 이름의 prop으로 내려줌*/}
        <Board squares={current.squares} onClick={(i)=>handleClick(i)}/>
      </div>

      <div className="game-info">
                <div className="status">{status}</div>
                    <ol style={{listStyle: 'none'}}>{moves}</ol>
      </div>
    </div>
  )

}

export default App;
