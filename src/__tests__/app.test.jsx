import { render, screen } from "@testing-library/react";

import App from "../app";
import { Farewell, Greeting } from "../components";

describe("farewell", () => {
  it("renders farewell massage without problems", () => {
    render(
      <App>
        <Greeting greeting='Hello, World!' />
        <Farewell name='John Doe' />
      </App>
    );

    const greeting = screen.getByText(/hello, world/i);
    expect(greeting).toBeInTheDocument();

    const name = screen.getByRole("heading", {
      name: /"goodbye, john doe!"/i,
    });
    expect(name).toBeInTheDocument();
  });
});
