import React from "react";

import { Button, Card } from "../utilitities";

function Greeting({ greeting = "Please enter greeting message" }) {
  const [showGreeting, setShowGreeting] = React.useState(greeting);

  const handleGreeting = () => {
    setShowGreeting("Hello, User!!");
  };

  return (
    <Card reverse={true}>
      <h2>{showGreeting}</h2>
      <Button
        onClick={handleGreeting}
        // isDisable
      >
        User
      </Button>
    </Card>
  );
}

export default Greeting;
