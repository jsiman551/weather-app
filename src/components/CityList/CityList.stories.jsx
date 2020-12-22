import React from 'react';
import CityList from '.';
import { action } from '@storybook/addon-actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'CityList',
  component: CityList
};

const Cities = [
    {
        city: "Cua",
        country: "Venezuela" 
    },
    {
        city: "Bogota",
        country: "Colombia" 
    },
    {
        city: "New York",
        country: "Estados Unidos" 
    },
    {
        city: "Buenos Aires",
        country: "Argentina" 
    }
]

export const CityExample = () => <CityList cities={Cities} onClickCity={action("hola mundo")} />;