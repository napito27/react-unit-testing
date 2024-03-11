import React from "react";

import UserInput from "./user-input";
import { Button, Card } from "../utilitities";

function Greeting({ greeting = "Please enter greeting message" }) {
  const [showGreeting, setShowGreeting] = React.useState(greeting);
  const [userName, setUserName] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState(false);

  const handleGreeting = () => {
    setShowGreeting("Hello, User!!");
  };

  const handleTextInput = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage(true);

      setTimeout(() => {
        setMessage(false);
      }, 2000);

      return;
    }

    setUserName(name);
    setName("");
  };

  const greetUser = `Hello, ${userName}!!`;
  const displayGreeting = userName ? greetUser : showGreeting;

  return (
    <Card reverse={true}>
      <h2>{displayGreeting}</h2>
      <Button
        onClick={handleGreeting}
        // isDisable
      >
        User
      </Button>
      <UserInput
        handleSubmit={handleSubmit}
        handleTextInput={handleTextInput}
        name={name}
      />
      {message && (
        <p className='input-error-message'>Please enter your name.</p>
      )}
    </Card>
  );
}

export default Greeting;
