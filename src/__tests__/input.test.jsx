import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UserInput from "../components/user-input";

const mockHandleInputText = jest.fn();
const mockHandleInput = jest.fn();

describe("input, ", () => {
  it("renders without problems", () => {
    render(
      <UserInput
        handleSubmit={mockHandleInput}
        handleTextInput={mockHandleInputText}
        name='John'
      />
    );

    const userInput = screen.getByPlaceholderText(/enter your name/i);

    expect(userInput).toBeInTheDocument();
  });
});

describe("input", () => {
  it("allows users to input their name", () => {
    render(
      <UserInput
        handleSubmit={mockHandleInput}
        handleTextInput={mockHandleInputText}
        name='John'
      />
    );

    const userInput = screen.getByPlaceholderText(/enter your name/i);
    userEvent.type(userInput, "Doe");

    expect(mockHandleInputText).toHaveBeenCalledTimes(3);
    screen.debug();
  });
});
