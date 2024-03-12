import React from 'react';
import { View, Text, Image } from 'react-native';
import { HourlyWeatherCardProps } from '../../interfaces';
import { styles } from './styles';
import { globalStyle } from '../../theme';

export const HourlyWeatherCard = ({ iconPath, hour, temperature }: HourlyWeatherCardProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={{ uri: `https://openweathermap.org/img/wn/${iconPath}@4x.png` }} />
            <Text style={[globalStyle.textWhite, styles.hour]}>{hour}</Text>
            <Text style={[globalStyle.textWhite, styles.temperature]}>{temperature}°</Text>
        </View>
    );
};
