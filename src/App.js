import React, { useEffect } from "react";
import "./App.css";
import Counter from "./components/counter";
import DataUploader from "./components/uploadData.js";
import Form from "./components/form";
import PaginationList from "./components/pagination-list.js";
import MemoizedValueComponent from "./hooks/useMemo.js";
import RichEditor from "./components/rich-editor.js";
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
      {/* <Counter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
      <Form />
      <DataUploader /> */}
      <MemoizedValueComponent />
      {/* <PaginationList /> */}
      <div style={{ width: "50%" }}>
        <RichEditor />
      </div>
    </div>
  );
}

export default App;
