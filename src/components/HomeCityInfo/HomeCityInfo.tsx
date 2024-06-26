import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { WEATHER_API_KEY } from '@env';
import { weatherAPI } from '../../api';
import { useLocation } from '../../hooks';
import { CityInfoProps, WeatherResponse } from '../../interfaces';
import { colors, globalStyle } from '../../theme';
import { styles } from './styles';

export const HomeCityInfo = () => {

    const { userLocation, setUserLocation, getCurrentLocation } = useLocation();

    const [cityInfo, setCityInfo] = useState<CityInfoProps>({
        name: '',
        coord: {
            lat: 0,
            lon: 0,
        },
        countryCode: '',
        temperature: 0,
        maxTemperature: 0,
        minTemperature: 0,
        weather: [],
    });

    useEffect(() => {
        getCurrentLocation()
            .then(location => {
                setUserLocation(location);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getCurrentWeather();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userLocation]);

    const getCurrentWeather = async () => {
        try {
            const { data } = await weatherAPI.get<WeatherResponse>(`/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${WEATHER_API_KEY}&units=metric`);
            const { name, coord, sys, main, weather } = data;

            setCityInfo({
                name,
                coord,
                countryCode: sys.country,
                temperature: Math.round(main.temp),
                maxTemperature: Math.round(main.temp_max),
                minTemperature: Math.round(main.temp_min),
                weather,
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.infoContainer}>
                <View>
                    <View style={styles.cityContainer}>
                        <Icon name="location-sharp" size={20} color={colors.white} />
                        <Text style={[globalStyle.textWhite, styles.cityText]}>{cityInfo.name}</Text>
                    </View>
                    <Text style={[globalStyle.textWhite, styles.temperature]}>{cityInfo.temperature}°</Text>
                    <Text style={[globalStyle.textWhite, styles.weather]}>{cityInfo.weather.length > 0 ? cityInfo.weather[0].main : 'No disponible'}</Text>
                    <View style={styles.coordsContainer}>
                        <Text style={[globalStyle.textWhite, styles.highlow]}>H: <Text>{cityInfo.maxTemperature}°</Text></Text>
                        <Text style={[globalStyle.textWhite, styles.highlow]}>L: <Text>{cityInfo.minTemperature}°</Text></Text>
                    </View>
                </View>
                <Image
                    source={{ uri: `https://openweathermap.org/img/wn/${cityInfo.weather.length > 0 ? cityInfo.weather[0].icon : ''}@4x.png` }}
                    style={styles.weatherIcon}
                />
            </View>
        </View>
    );
};
