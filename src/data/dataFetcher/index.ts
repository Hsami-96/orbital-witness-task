import { Title } from "../../models/Title"
import { mapToTitlesData, singleTitleMap } from "../../utils/MapToTitles"
import fetchTitlesData from "../fakeData"

export const fetchTitles = async () => {
    const results = await fetchTitlesData()
    let titlesData: Title[] = []
    if(results) {
        titlesData = [...mapToTitlesData(results)]
    }

    return titlesData
}

export const fetchTitle = async (titleNumber: string) => {
    const results = await fetchTitlesData() as any[]
    let titleData : Title = {propertyAddress: '', tenure: '', titleNumber: '', xCoordinate: 0, yCoordinate: 0 }
    if(results) {
        titleData = singleTitleMap(results.find(x => x['Title Number'] === titleNumber)) ?? null 
    }

    return titleData
}