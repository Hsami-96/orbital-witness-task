import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders titles component page by default", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  await waitFor(() => {
    expect(screen.getByText(/All Titles/i)).toBeInTheDocument();
  });
});
