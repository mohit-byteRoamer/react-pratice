import React, { useState } from "react";

function Counter({ count, decrementCount, incrementCount }) {
  console.log("Counter");

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default Counter;
