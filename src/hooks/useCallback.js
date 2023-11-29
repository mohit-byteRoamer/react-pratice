// Memoizes functions to prevent unnecessary re-renders of child components.

import React, { useState, useCallback } from 'react';

const MemoizedComponent = () => {
  const [count, setCount] = useState(0);

  // Memoized function
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Increment</button>;
});
