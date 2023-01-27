import { Title } from "../models/Title"

export const mapToTitlesData = (data: any): Title[] => {
    let titles: Title[] = []
    data.map((title: any) => {
        const mappedTitle: Title = singleTitleMap(title)
        titles.push(mappedTitle)
    })
    return titles
}

const singleTitleMap = (title: any): Title => ({
    titleNumber: title["Title Number"] ?? '',
    propertyAddress: title["Property Address"] ?? '',
    tenure: title.Tenure ?? '',
    xCoordinate: title.X ?? 0,
    YCoordinate: title.Y ?? 0,
})
