import React from "react"
import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import Weather from "../Weather"
import CityInfo from "../CityInfo"

const renderCityandCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } =cityAndCountry
    return (
        <li key={city} onClick={eventOnClickCity}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={8} xs={12}>
                    <CityInfo countries={country} city={city} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Weather temperature={10} state="cloud" />
                </Grid>
            </Grid>
        </li>
    )
}

const CityList = ({ cities, onClickCity }) => {
    return (
        <ul>
            {cities.map(cityAndCountry => renderCityandCountry(onClickCity)(cityAndCountry))}
        </ul>
    )
}

CityList.prototype = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList;