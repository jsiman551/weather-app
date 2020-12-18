import React from 'react';
import Weather from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Weather',
  component: Weather
};

export const WeatherCloud = () => <Weather temperature={10} state="cloud" />;
export const WeatherCloudy= () => <Weather temperature={10} state="Cloudy" />;
export const WeatherFog = () => <Weather temperature={10} state="Fog" />;
export const WeatherSunny = () => <Weather temperature={10} state="Sunny" />;
export const WeatherRain = () => <Weather temperature={10} state="Rain" />;