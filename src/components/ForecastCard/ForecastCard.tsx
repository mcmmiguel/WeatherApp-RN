import React from 'react';
import { View, Text, Image } from 'react-native';
import { HourlyWeatherCardProps } from '../../interfaces';
import { styles } from './styles';
import { globalStyle } from '../../theme';

export const ForecastCard = ({ iconPath, date, hour, temperature }: HourlyWeatherCardProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={{ uri: `https://openweathermap.org/img/wn/${iconPath}@4x.png` }} />
            <Text style={[globalStyle.textWhite, styles.date]}>{date}</Text>
            <Text style={[globalStyle.textWhite, styles.dateTime]}>{hour}</Text>
            <Text style={[globalStyle.textWhite, styles.temperature]}>{temperature}°</Text>
        </View>
    );
};
