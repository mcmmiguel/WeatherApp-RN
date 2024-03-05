import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { CityCard } from '../../components/CityCard/CityCard';
import { weatherAPI } from '../../api/weatherAPI';
import { CityInfoProps, WeatherResponse } from '../../interfaces/interfaces';

// const cityInfo = {
//     cityName: 'Manzanillo',
//     countryCode: 'MX',
//     units: 'metric',
//     apiID: 'd08590422e6253bd0e931cc2b9133511',
// };

export const SearchScreen = () => {

    const [savedCities, setSavedCities] = useState<CityInfoProps[]>([]);


    // const saveCity = () => {

    // };

    const loadWeatherData = async () => {
        try {
            const { data: { name, coord, sys, main, weather } } = await weatherAPI.get<WeatherResponse>('https://api.openweathermap.org/data/2.5/weather?q=manzanillo,MX&appid=d08590422e6253bd0e931cc2b9133511&units=metric');
            const cityInfo = {
                name,
                coord,
                countryCode: sys.country,
                temperature: main.temp,
                weather,
            };

            setSavedCities([...savedCities, cityInfo]);
            console.log(savedCities);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadWeatherData();
    }, []);

    return (
        <View>
            <CityCard
                city="Armería"
                temperature="20"
                lat={15}
                long={15}
                state="Colima"
            />
        </View>
    );
};
