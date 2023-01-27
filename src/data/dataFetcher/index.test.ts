import { fetchTitles } from "."
import fetchTitlesData from "../fakeData"

jest.mock('../fakeData')

const mockFakeAPI = () => {
    const mockTitlesData = jest.mocked(fetchTitlesData)
    return mockTitlesData.mockResolvedValue(() => {
        [{
            "Title Number": "NGL931799",
            "Property Address": "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
            "Tenure": "Leasehold",
            "X": -0.108098777,
            "Y": 51.5201911
        }]
    })
}
test('datafetcher returns an object', async () => { 
    mockFakeAPI()
    const resultData = await fetchTitles()
    expect(typeof resultData).toBe('object')
})

test('response contains a titles array', async () => {
    mockFakeAPI()
    const resultData = await fetchTitles();
    expect(Array.isArray(resultData)).toBe(true);
  })

export {}