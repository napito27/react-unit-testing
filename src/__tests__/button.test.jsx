import { render, screen } from "@testing-library/react";

import { Button } from "../utilitities";

test("renders button without problems", () => {
  render(<Button>This is my button</Button>);

  const text = screen.getByText(/this is my button/i);
  expect(text).toBeInTheDocument();
});

test("renders message if user did not provide button name", () => {
  render(<Button></Button>);

  const text = screen.getByText(/button name/i);
  expect(text).toBeInTheDocument();
});
