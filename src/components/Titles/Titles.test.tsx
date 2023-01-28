import { render } from "@testing-library/react"
import Titles from "./Titles"

test('should render container div', () => { 
    const {container} = render(<Titles/>)
    expect(container.firstChild).toHaveClass('titlesContainer')
})

export {}