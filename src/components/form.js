import React, { memo, useState } from "react";

let Form = memo(() => {
  console.log("Form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isInputEdited, setIsInputEdited] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsInputEdited(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsInputEdited(true);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setIsInputEdited(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

  return (
    <>
      {isInputEdited && (
        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Message:
            <textarea value={message} onChange={handleMessageChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      {!isInputEdited && (
        <div>
          <h2>Type something in the input field to see the form</h2>
          <input type="text" onChange={handleNameChange} />
        </div>
      )}
    </>
  );
});

export default Form;
