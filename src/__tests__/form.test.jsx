import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UserInput from "../components/user-input";

const mockSubmit = jest.fn();
const mockHandleTextInput = jest.fn();

test("calls submit function once", () => {
  render(
    <UserInput
      handleSubmit={mockSubmit}
      handleTextInput={mockHandleTextInput}
      name='Napo'
    />
  );

  const btn = screen.getByRole("button", { name: "Submit" });

  userEvent.click(btn);

  expect(mockSubmit).toHaveBeenCalledTimes(1);
});
