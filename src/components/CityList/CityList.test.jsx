import React from "react"
import { render } from "@testing-library/react"
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