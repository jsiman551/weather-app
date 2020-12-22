import React from 'react';
import WeatherDetails from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'WeatherDetails',
  component: WeatherDetails
};

export const WeatherDetailExample = () => <WeatherDetails humidity={10} wind={29} />;