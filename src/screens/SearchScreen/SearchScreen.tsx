import React, { useState } from 'react';
import { ImageBackground, Text } from 'react-native';
import { CityCard, DebouncedSearchBar } from '../../components';
import { CityInfoProps, WeatherResponse } from '../../interfaces';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export const SearchScreen = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<WeatherResponse[]>([]);
    const [savedCities, setSavedCities] = useState<CityInfoProps[]>([]);

    const handleSaveCity = (cityInfo: CityInfoProps) => {
        const cityExists = savedCities.some(savedCity => savedCity.id === cityInfo.id);

        if (!cityExists) {
            setSavedCities([...savedCities, cityInfo]);
        } else {
            setSavedCities(savedCities.filter((savedCity => savedCity.id !== cityInfo.id)));
        }
    };

    return (
        <ImageBackground source={require('../../assets/background-img.png')} resizeMode="cover" style={styles.backgroundImage}>
            <SafeAreaView style={styles.mainContainer}>
                <DebouncedSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSearchResults={setSearchResults} />

                {searchQuery && searchResults
                    ?
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
                    })
                    :
                    <>
                        <Text style={styles.recentlyAddedText}>Recently Added</Text>
                        {savedCities.map((city) => {
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
                    </>
                }

            </SafeAreaView>
        </ImageBackground>
    );
};
