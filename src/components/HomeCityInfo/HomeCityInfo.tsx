import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import bgImage from '../../assets/background-img.png';
import { colors, globalStyle } from '../../theme/theme';
import { styles } from './styles';
import Geolocation from '@react-native-community/geolocation';
import { UserLocation, WeatherResponse, CityInfoProps } from '../../interfaces/interfaces';
import { weatherAPI } from '../../api/weatherAPI';

export const HomeCityInfo = () => {

    const [userLocation, setUserLocation] = useState<UserLocation>({
        latitude: 0,
        longitude: 0,
    });

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
    }, []);

    useEffect(() => {
        getCurrentWeather();
    }, []);

    const getCurrentLocation = (): Promise<UserLocation> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {

                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    });

                },
                (err) => reject(new Error(err)), { enableHighAccuracy: true }
            );
        });
    };

    const getCurrentWeather = async () => {
        try {
            const { data } = await weatherAPI.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=d08590422e6253bd0e931cc2b9133511&units=metric`);
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
            <ImageBackground source={bgImage} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.infoContainer}>
                    <View>
                        <View style={styles.cityContainer}>
                            <Icon name="location-sharp" size={20} style={styles.locationIcon} color={colors.white} />
                            <Text style={[globalStyle.textWhite, styles.cityText]}>{cityInfo.name}</Text>
                        </View>
                        <Text style={[globalStyle.textWhite, styles.temperature]}>{cityInfo.temperature}°</Text>
                        <Text style={[globalStyle.textWhite, styles.weather]}>{cityInfo.weather[0].main}</Text>
                        <View style={styles.coordsContainer}>
                            <Text style={[globalStyle.textWhite, styles.highlow]}>H: <Text>{cityInfo.maxTemperature}°</Text></Text>
                            <Text style={[globalStyle.textWhite, styles.highlow]}>L: <Text>{cityInfo.minTemperature}°</Text></Text>
                        </View>
                    </View>
                    <Icon name="location-sharp" size={90} color={colors.white} />
                </View>
            </ImageBackground>
        </View>
    );
};
