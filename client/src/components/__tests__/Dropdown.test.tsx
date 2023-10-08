import { render, screen } from "@testing-library/react"
import DropDown from "../DropDown"
import userEvent from "@testing-library/user-event"
import getRandomString from "../../utilities/getRandomString"

test('Dropdown appears if pressed', async () => {
    const mockList = [getRandomString(), getRandomString()]

    render(<DropDown label='label' list={mockList} value={mockList[0]} handleClick={jest.fn()} />)

    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText(mockList[1])).toBeInTheDocument
})