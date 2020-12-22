import React from "react"
import { render } from "@testing-library/react"
import WeatherDetails from '.'

test("WeatherDetails render", async () => {
    const { findByText } = render(<WeatherDetails humidity={24} wind={50} />)

    const wind = await findByText(/50/)
    const humidity = await findByText(/24/)

    expect(wind).toHaveTextContent("Wind: 50km/h")
    expect(humidity).toHaveTextContent("Humendad: 24%")
})