import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { fetchTitle } from "../../data/dataFetcher";
import { Title } from "../../models/Title";
import Titles from "../Titles/Titles";
import TitleDetails from "./TitleDetails";
const mockedUsedNavigate = jest.fn();

jest.mock("../../data/dataFetcher");
jest.mock("@react-google-maps/api", () => {
  const React = require("React");
  return {
    withGoogleMap: (Component: any) => Component,
    withScriptjs: (Component: any) => Component,
    Polyline: (props: any) => <div />,
    Marker: (props: any) => <div />,
    GoogleMap: (props: any) => (
      <div>
        <div className="mock-google-maps" />
        {props.children}
      </div>
    ),
  };
});
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
 useNavigate: () => mockedUsedNavigate,
}));

const result: Title = {
  titleNumber: "NGL931799",
  propertyAddress: "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
  tenure: "Leasehold",
  xCoordinate: -0.108098777,
  yCoordinate: 51.5201911,
};

test("should render title details container", async () => {
  const { container } = render(<TitleDetails />);

  await waitFor(() => {
    const titleContainer = container.getElementsByClassName(
      "titleDetailsContainer"
    );
    expect(titleContainer.length).toBe(1);
  });
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
  const mockTitlesData = jest.mocked(fetchTitle);
  mockTitlesData.mockImplementationOnce(() => {
    return Promise.resolve(result);
  });
  render(<TitleDetails />);
  await waitFor(() => {
     const button = screen.getByTestId("backBtn");
    fireEvent.click(button);
  })
 
  render(<Titles />);
  await waitFor(() => {
    const allTitles = screen.getByText(/All Titles/i);
    expect(allTitles).toBeInTheDocument();
  });
});

test("should render a maps container on the screen", async () => {
  const mockTitlesData = jest.mocked(fetchTitle);
  mockTitlesData.mockImplementationOnce(() => {
    return Promise.resolve(result);
  });
  const { container } = render(<TitleDetails />);
  await waitFor(() => {
    const titleContainer = container.getElementsByClassName("mapContainer");
    expect(titleContainer.length).toBe(1);
  });
});
export { };

