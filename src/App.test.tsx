import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders main header", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", {
      name: "My Topics Challenge",
    });
    expect(headingElement).toBeInTheDocument();
  });
});
