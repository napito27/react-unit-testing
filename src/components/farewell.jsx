import React from "react";
import { Card } from "../utilitities";

function Farewell({ name }) {
  return (
    <Card reverse={true}>
      <h3>"Goodbye, {name}!"</h3>
    </Card>
  );
}

export default Farewell;
