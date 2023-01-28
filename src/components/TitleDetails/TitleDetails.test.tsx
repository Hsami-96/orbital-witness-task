import { render } from "@testing-library/react"
import { Title } from "../../models/Title"
import TitleDetails from "./TitleDetails"

jest.mock('../../data/dataFetcher')

const result: Title= {
    titleNumber: "NGL931799",
    propertyAddress: "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
    tenure: "Leasehold",
    xCoordinate: -0.108098777,
    yCoordinate: 51.5201911
}

test('should render title details container', () => { 
    const {container} = render(<TitleDetails/>)
    const titleContainer = container.getElementsByClassName('titleDetailsContainer')
    expect(titleContainer.length).toBe(1)
})

test('should render title details data on the screen', () => {
    const mockTitlesData = jest.mocked(fetchTitles)
    mockTitlesData.mockImplementationOnce(() => {
        return Promise.resolve(result)
    })
  
    render(<Titles />);
  
    await waitFor(() => {
      const resultTitle = screen.getByText(/NGL931799/i);
      expect(resultTitle).toBeInTheDocument();
    });
})

test('should render a back button on the screen', () => { 

 })

export {}