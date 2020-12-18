import React from "react"
import PropTypes from "prop-types"
import Weather from "../Weather"
import CityInfo from "../CityInfo"

const renderCityandCountry = cityAndCountry => {
    const { city, country } =cityAndCountry
    return (
        <li key={city}>
            <CityInfo countries={country} city={city} />
            <Weather temperature={10} state="cloud" />
        </li>
    )
}

const CityList = ({ cities }) => {
    return (
        <ul>
            {cities.map(cityAndCountry => renderCityandCountry(cityAndCountry))}
        </ul>
    )
}

CityList.prototype = {
    cities: PropTypes.array.isRequired,
}

export default CityList;