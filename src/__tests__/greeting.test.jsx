import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "../components/greeting";
import { Button } from "../utilitities";

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

it("changes greeting when button is clicked", () => {
  const handleClick = jest.fn();

  render(
    <Greeting greeting='Hello, World!'>
      <Button onClick={handleClick}>User</Button>
    </Greeting>
  );

  const btn = screen.getByRole("button", { name: /User/i });
  userEvent.click(btn);

  expect(screen.queryByText(/hello, user!!/i)).toBeInTheDocument();
  screen.debug();
});
