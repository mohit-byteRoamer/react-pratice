import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the styles

const MyEditor = () => {
  const [content, setContent] = useState(
    "<h2>Hello Every One</h2><ol><li>i am amsdlas</li></ol>"
  );

  const handleChange = (value) => {
    console.log("value", value);
    setContent(value);
  };
  const editorStyle = {
    padding: "10px",
  };
  return (
    <ReactQuill style={editorStyle} value={content} onChange={handleChange} />
  );
};

export default MyEditor;
