import React from 'react';
import { ImageBackground } from 'react-native';
import { HomeCityInfo, HourlyWeatherCard } from '../../components';
import bgImage from '../../assets/background-img.png';
import { styles } from './styles';

export const HomeScreen = () => {

    return (
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.backgroundImage}>
            <HomeCityInfo />
            <HourlyWeatherCard />
        </ImageBackground>
    );
};
