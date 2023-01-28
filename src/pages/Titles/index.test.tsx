import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import TitlesPage from "."

test('should render container div', () => { 
    const {container} = render(<BrowserRouter><TitlesPage/></BrowserRouter>)
    expect(container.firstChild).toHaveClass('container')
})

export {}