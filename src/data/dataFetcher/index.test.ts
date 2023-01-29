import { fetchTitle, fetchTitles } from "."
import fetchTitlesData from "../fakeData"

jest.mock('../fakeData')
const result = [{
    "Title Number": "NGL931799",
    "Property Address": "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
    "Tenure": "Leasehold",
    "X": -0.108098777,
    "Y": 51.5201911
},
{
    "Title Number": "NGL932799",
    "Property Address": "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
    "Tenure": "Leasehold",
    "X": -0.108098777,
    "Y": 51.5201911
}]
const mockFakeAPI = () => {
 const mockTitlesData = jest.mocked(fetchTitlesData)
 mockTitlesData.mockImplementationOnce(() => {
    return Promise.resolve(result)
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

test('response returns title requested for', async () => {
    const mockFakeAPI = () => {
        const mockTitleData = jest.mocked(fetchTitlesData)
        mockTitleData.mockImplementationOnce(() => {
           return Promise.resolve(result)
    })
    }

    mockFakeAPI()
    const resultData = await fetchTitle(result[0]["Title Number"]);
    expect(resultData).toHaveProperty('titleNumber', 'NGL931799')
})

export {}