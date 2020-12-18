import React from "react"
import {render} from "@testing-library/react"
import CityInfo from "."

const city = "Caracas"
const Country = "Venezuela"

test("CityInfo render", async() => {
    //arrange
    //act
    const { findAllByRole } = render(<CityInfo city={city} countries={Country} />)
    //assett
    const CityandCountryComponent = await findAllByRole("heading")

    expect(CityandCountryComponent[0]).toHaveTextContent(city)
    expect(CityandCountryComponent[1]).toHaveTextContent(Country)
})