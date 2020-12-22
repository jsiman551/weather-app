import React from "react"
import { fireEvent, render } from "@testing-library/react"
import CityList from "."

const Cities = [
    {
        city: "Cua",
        country: "Venezuela" 
    },
    {
        city: "Bogota",
        country: "Colombia" 
    },
    {
        city: "New York",
        country: "Estados Unidos" 
    },
    {
        city: "Buenos Aires",
        country: "Argentina" 
    }
]

test("CityList render", async() => {

    const { findAllByRole } = render(<CityList cities={Cities} />)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)

})

test("CityList click on item", async() => {

    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={Cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("listitem")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

})