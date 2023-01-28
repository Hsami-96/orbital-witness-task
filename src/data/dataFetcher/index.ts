import { Title } from "../../models/Title"
import { mapToTitlesData } from "../../utils/MapToTitles"
import fetchTitlesData from "../fakeData"

export const fetchTitles = async () => {
    const results = await fetchTitlesData()
    let titlesData: Title[] = []
    if(results) {
        titlesData = [...mapToTitlesData(results)]
    }

    return titlesData
}