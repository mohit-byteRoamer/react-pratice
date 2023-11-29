import React, { useState, useMemo, memo } from "react";

const MemoizedValueComponent = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const isOdd = useMemo(() => {
    for (let i = 0; i < 200000000; i++) {}
    if (count % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }, [count]);
  return (
    <div>
      <div onClick={() => setCount((val) => val + 1)}>
        Count Plus Handler {count}
      </div>
      <p>Count number is : {isOdd}</p>
      <div onClick={() => setCount1((val) => val + 1)}>
        count1 Plus Handler {count1}
      </div>
    </div>
  );
};

export default MemoizedValueComponent;
