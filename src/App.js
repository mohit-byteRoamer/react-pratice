import React from "react";
import "./App.css";
import Counter from "./components/counter";
import DataUploader from "./components/uploadData.js";
import Form from "./components/form";
function App() {
  console.log("App");

  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <Counter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
      <Form />
      <DataUploader />
    </div>
  );
}

export default App;
