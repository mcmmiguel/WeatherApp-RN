import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, TextInput, View } from 'react-native';
import { CityCard } from '../../components';
import { weatherAPI } from '../../api';
import { CityInfoProps, WeatherResponse } from '../../interfaces';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme';
import { WEATHER_API_KEY } from '@env';

export const SearchScreen = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<WeatherResponse[]>([]);
    const [savedCities, setSavedCities] = useState<CityInfoProps[]>([]);

    const handleSearch = async () => {
        try {
            const resp = await weatherAPI.get(`/weather?q=${searchQuery}&appid=${WEATHER_API_KEY}&units=metric`);
            setSearchResults([resp.data]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSaveCity = (cityInfo: CityInfoProps) => {

        const cityExists = savedCities.some(savedCity => savedCity.id === cityInfo.id);

        if (!cityExists) {
            setSavedCities([...savedCities, cityInfo]);
            console.log('Ciudad agregada', savedCities);
        } else {
            setSavedCities(savedCities.filter((savedCity => savedCity.id !== cityInfo.id)));
            console.log('Ciudad removida');
        }
    };

    useEffect(() => {
        if (searchQuery.length === 0) {
            setSearchResults([]);
            return;
        }

        setTimeout(() => {
            handleSearch();
        }, 1000);

    }, [searchQuery]);

    const loadWeatherData = async () => {
        try {
            const { data: { name, coord, sys, main, weather, id } } = await weatherAPI.get<WeatherResponse>('https://api.openweathermap.org/data/2.5/weather?q=manzanillo,MX&appid=d08590422e6253bd0e931cc2b9133511&units=metric');
            const cityInfo = {
                id,
                name,
                coord,
                countryCode: sys.country,
                temperature: main.temp,
                maxTemperature: main.temp_max,
                minTemperature: main.temp_min,
                weather,
            };

            setSavedCities([...savedCities, cityInfo]);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ImageBackground source={require('../../assets/background-img.png')} resizeMode="cover" style={styles.backgroundImage}>
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.searchBarContainer}>
                    <Icon style={styles.searchIcon} name="search-outline" size={25} color={colors.white} />
                    <TextInput
                        style={styles.searchBar}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholder="Search location"
                        placeholderTextColor={colors.white}
                    />
                </View>

                {searchResults &&
                    searchResults.map(city => {
                        const { name, main: { temp }, coord, sys, weather, id } = city;
                        return (
                            <CityCard
                                key={id}
                                id={id}
                                name={name}
                                temperature={Math.round(temp)}
                                coord={coord}
                                countryCode={sys.country}
                                weather={weather}
                                onSave={handleSaveCity}
                            />
                        );
                    })}

                <Text>Recently Added</Text>
                {savedCities &&
                    savedCities.map((city) => {
                        const { coord, countryCode, id, name, temperature, weather, isSaved } = city;
                        return (
                            <CityCard
                                key={id}
                                id={id}
                                name={name}
                                temperature={Math.round(temperature)}
                                coord={coord}
                                countryCode={countryCode}
                                weather={weather}
                                isSaved={isSaved}
                                onSave={handleSaveCity}
                            />
                        );
                    })

                }
            </SafeAreaView>
        </ImageBackground>
    );
};
