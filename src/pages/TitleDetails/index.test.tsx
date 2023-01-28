import { render } from "@testing-library/react"
import TitleDetailsPage from "."

test('should render container div', () => { 
    const {container} = render(<TitleDetailsPage/>)
    expect(container.firstChild).toHaveClass('container')
})

export {}