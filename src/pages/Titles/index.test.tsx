import { render } from "@testing-library/react"
import TitlesPage from "."

test('should render container div', () => { 
    const {container} = render(<TitlesPage/>)
    expect(container.firstChild).toHaveClass('container')
})

export {}