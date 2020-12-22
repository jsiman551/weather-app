import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"

const WeatherDetails = ({ humidity, wind }) => {
    return (
        <>
            <Typography>Humendad: {humidity}%</Typography>
            <Typography>Wind: {wind}km/h</Typography> 
        </>
    )
}

WeatherDetails.prototype = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherDetails