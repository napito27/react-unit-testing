import Card from "../utilitities/card";

function Greeting({ greeting = "Please enter greeting message" }) {
  return (
    <Card reverse={true}>
      <h2>{greeting}</h2>
    </Card>
  );
}

export default Greeting;
