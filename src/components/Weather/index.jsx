import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from "react-icons/wi"
import { IconContext } from "react-icons"

const validValues = [
    "cloud",
    "cloudy",
    "fog",
    "sunny",
    "rain"
]

const stateByName = {
    cloud: WiCloud,
    Cloudy: WiDayCloudy,
    Fog: WiDayFog,
    Sunny: WiDaySunny,
    Rain: WiRain
}

const renderState = state => {
    const Icon = stateByName[state] 
    return <Icon />
}

const Weather = ({ temperature, state }) => {
    return (
        <div>
            <IconContext.Provider value={{ size: '5em' }}>
                { renderState(state) }
            </IconContext.Provider>
            <Typography display="inline" variant="h3">{temperature}</Typography>
        </div>
    )
}

Weather.prototype = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}

export default Weather;