import React from "react";
import Square from "./square";
const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)}></Square>
    ))}
  </div>
);

export default Board;
