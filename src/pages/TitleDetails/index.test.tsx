import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import TitleDetailsPage from "."

test('should render container div', () => { 
    const {container} = render(<BrowserRouter><TitleDetailsPage/></BrowserRouter>)
    expect(container.firstChild).toHaveClass('container')
})

export {}