import { render, waitFor, within, screen } from "@testing-library/react"
import { BrowserRouter, Router } from "react-router-dom"
import { fetchTitles } from "../../data/dataFetcher"
import { Title } from "../../models/Title"
import Titles from "./Titles"
jest.mock('../../data/dataFetcher')
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

const result: Title[] = [{
    titleNumber: "NGL931799",
    propertyAddress: "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
    tenure: "Leasehold",
    xCoordinate: -0.108098777,
    yCoordinate: 51.5201911
}]

test('should render container div', async () => { 
    const {container} = render(<Titles/>)
    await waitFor(() => {
      const titleContainer = container.getElementsByClassName('titlesContainer')
    expect(titleContainer.length).toBe(1)
    })
})

test('renders titles details', async () => {
    const mockTitlesData = jest.mocked(fetchTitles)
    mockTitlesData.mockImplementationOnce(() => {
        return Promise.resolve(result)
    })
  
    render(<Titles />);
  
    await waitFor(() => {
      const resultTitle = screen.getByText(/NGL931799/i);
      expect(resultTitle).toBeInTheDocument();
    });
  });

test('renders error', async () => {
  const mockTitlesData = jest.mocked(fetchTitles)
  mockTitlesData.mockImplementationOnce(() => {
    throw new Error('404');
  });

  render(<Titles />);

  await waitFor(() => {
    const errorElement = screen.getByText(/Error/i);
    expect(errorElement).toBeInTheDocument();
  });
});

export {}