import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "../components/greeting";
import { Button } from "../utilitities";

const handleClick = jest.fn();

describe("greeting", () => {
  it("renders greeting without problems", () => {
    render(<Greeting greeting='hola, mundo' />);

    const text = screen.getByText(/hola/i);
    expect(text).toBeInTheDocument();
  });
});

describe("greeting", () => {
  it("should render message if user did not provide greeting text", () => {
    render(<Greeting />);

    const text = screen.getByText(/Please enter greeting message/i);
    expect(text).toBeInTheDocument();
  });
});

describe("greeting", () => {
  it("should change greeting when button is clicked", () => {
    render(
      <Greeting greeting='Hello, World!'>
        <Button onClick={handleClick}>User</Button>
      </Greeting>
    );

    const btn = screen.getByRole("button", { name: /User/i });
    userEvent.click(btn);

    expect(screen.queryByText(/hello, user!!/i)).toBeInTheDocument();
  });
});

describe("greeting", () => {
  it("allows users to input their name, and shows it on greeting", () => {
    render(<Greeting greeting='Hello, World!'></Greeting>);

    const userInput = screen.getByPlaceholderText(/enter your name/i);
    userEvent.type(userInput, "John");

    const btnSubmit = screen.getByRole("button", { name: /submit/i });
    userEvent.click(btnSubmit);

    expect(screen.getByText("Hello, John!!")).toBeInTheDocument();
  });
});

describe("greeting, input", () => {
  it("displays message if user submits input without name", () => {
    render(<Greeting greeting='Hello, World!'></Greeting>);

    const btnSubmit = screen.getByRole("button", { name: /submit/i });
    userEvent.click(btnSubmit);

    const message = screen.getByText(/Please enter your name./i);
    expect(message).toBeInTheDocument();
  });
});
