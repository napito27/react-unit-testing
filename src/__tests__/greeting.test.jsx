import { render, screen } from "@testing-library/react";

import Greeting from "../components/greeting";

test("renders greeting without problems", () => {
  render(<Greeting greeting='hola, mundo' />);

  const text = screen.getByText(/hola/i);
  expect(text).toBeInTheDocument();
});

test("renders message if user did not provide greeting text", () => {
  render(<Greeting />);

  const text = screen.getByText(/Please enter greeting message/i);
  expect(text).toBeInTheDocument();
});
