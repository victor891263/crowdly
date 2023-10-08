import { render, screen } from "@testing-library/react"
import PopUp from "../PopUp"

test('PopUp appears if a non-empty string is given', () => {
    render(<PopUp msg={'a'} color="red" />)

    const popUp = screen.getByTestId('popUp')
    expect(popUp).toHaveClass('transition')

    setTimeout(() => {
        expect(popUp).toHaveClass('opacity-0')
    }, 3000)
})