import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import "typeface-roboto"

const CityInfo = ({ city, countries }) => {
    return (
        <>
            <Typography display="inline" variant="h4">{city}, </Typography>
            <Typography display="inline" variant="h5">{countries}</Typography>
        </>
    )
}

CityInfo.prototype = {
    city: PropTypes.string.isRequired,
    countries: PropTypes.string.isRequired
}

export default CityInfo;