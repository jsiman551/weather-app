import React from "react"
import { render } from "@testing-library/react"
import Weather from "."

test("Weather render", async() => {
    const { findByRole } = render(<Weather temperature={10} state="cloud" />)

    const Temp = await findByRole("heading")

    expect(Temp).toHaveTextContent("10")
})