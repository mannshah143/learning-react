import { useState } from 'react';

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}> 
      {value} 
    </button>
  );
}

export default function Board() {
  const [xTurn, setXTurn] = useState(true); // convention: [something, setSomething]
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(i) { // onSomething name for props which represent events
                            // handleSomething for the fucntion definitions which handle those events
    if (squares[i] != null || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xTurn) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXTurn(!xTurn);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is " +  winner;
  } else {
    if (xTurn) {
      status = "X's turn to play";
    } else {
      status = "O's turn to play";
    }
  }
  
  return (
    <>
    <div className="status">
      {status}
    </div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => {handleClick(0)}} /> 
      <Square value={squares[1]} onSquareClick={() => {handleClick(1)}} />
      <Square value={squares[2]} onSquareClick={() => {handleClick(2)}} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => {handleClick(3)}} />
      <Square value={squares[4]} onSquareClick={() => {handleClick(4)}} />
      <Square value={squares[5]} onSquareClick={() => {handleClick(5)}} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => {handleClick(6)}} />
      <Square value={squares[7]} onSquareClick={() => {handleClick(7)}} />
      <Square value={squares[8]} onSquareClick={() => {handleClick(8)}} />
    </div>
    </>
  );
}

function calculateWinner(squares) {
  const winSeq = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i=0; i<winSeq.length; i++) {
    const [a, b, c] = winSeq[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}