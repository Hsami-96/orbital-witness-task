import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchTitle } from "../../data/dataFetcher";
import { Title } from "../../models/Title";
import TitleDetails from "./TitleDetails";

jest.mock("../../data/dataFetcher");

const result: Title = {
  titleNumber: "NGL931799",
  propertyAddress: "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
  tenure: "Leasehold",
  xCoordinate: -0.108098777,
  yCoordinate: 51.5201911,
};

test("should render title details container", () => {
  const { container } = render(<TitleDetails />);
  const titleContainer = container.getElementsByClassName(
    "titleDetailsContainer"
  );
  expect(titleContainer.length).toBe(1);
});

test("should render title details data on the screen", async () => {
  const mockTitlesData = jest.mocked(fetchTitle);
  mockTitlesData.mockImplementationOnce(() => {
    return Promise.resolve(result);
  });

  render(<TitleDetails />);

  await waitFor(() => {
    const resultTitle = screen.getByText(/NGL931799/i);
    expect(resultTitle).toBeInTheDocument();
  });
});

test("should redirect to all titles screen on back button click", async () => {
  render(<TitleDetails />);
  const button = screen.getByTestId("backBtn");
  userEvent.click(button);

  await waitFor(() => {
    const allTitles = screen.getByText(/All Titles/i);
    expect(allTitles).toBeInTheDocument();
  });
});

test('should render a maps container on the screen', () => {
    const { container } = render(<TitleDetails />);
    const titleMapContainer = container.getElementsByClassName(
      "titleMapContainer"
    );
    expect(titleMapContainer.length).toBe(1);
})
export {};
