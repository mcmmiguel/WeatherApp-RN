import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import { HomeCityInfo, ForecastCard } from '../../components';
import { weatherAPI } from '../../api';
import { getFormattedDay, getFormattedHour } from '../../helpers';
import { useLocation } from '../../hooks';
import { WEATHER_API_KEY } from '@env';
import { styles } from './styles';
import { DailyWeatherResponse, List } from '../../interfaces';

export const HomeScreen = () => {

    const { userLocation } = useLocation();
    const [forecastWeatherData, setForecastWeatherData] = useState<List[]>([]);

    const getForecastWeather = async () => {
        try {
            const { data } = await weatherAPI.get<DailyWeatherResponse>(`/forecast?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${WEATHER_API_KEY}&units=metric`);
            setForecastWeatherData(data.list);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getForecastWeather();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userLocation]);

    return (
        <ImageBackground source={require('../../assets/background-img.png')} resizeMode="cover" style={styles.backgroundImage}>
            <HomeCityInfo />
            {forecastWeatherData && (
                <View style={styles.forecastContainer}>
                    <View style={styles.forecastTextContainer}>
                        <Text style={styles.forecastText}>5 day forecast</Text>
                    </View>
                    <FlatList
                        style={styles.forecastFlatList}
                        data={forecastWeatherData}
                        renderItem={({ item }) => {
                            const { main, weather, dt } = item;
                            return (
                                <ForecastCard
                                    iconPath={weather?.[0]?.icon || ''}
                                    date={getFormattedDay(dt)}
                                    hour={getFormattedHour(dt)}
                                    temperature={Math.round(main.temp)}
                                />
                            );
                        }}
                        keyExtractor={({ dt }) => dt.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            )}
        </ImageBackground>
    );
};
