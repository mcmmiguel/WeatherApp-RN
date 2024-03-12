import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { colors } from '../../theme/theme';
import { CityCardProps } from '../../interfaces';

export const weatherIcons = {
    sunny: 'sunny-outline',
};

export const CityCard = ({ temperature, lat, long, city, state, weather }: CityCardProps) => {
    return (
        <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.infoContainer}>
                <Text style={styles.degreesText}>{temperature}°</Text>
                <View style={styles.coordenatesContainer}>
                    <Text style={styles.coordenatesText}>
                        Lat:
                        <Text style={styles.coordenatesText}> {lat}°</Text>
                    </Text>
                    <Text style={styles.coordenatesText}>
                        Long:
                        <Text style={styles.coordenatesText}> {long}°</Text>
                    </Text>
                </View>
                <Text style={styles.cityText}>
                    {city},
                    <Text style={styles.cityText}> {state}</Text>
                </Text>
            </View>

            <View style={styles.iconContainer}>
                <Icon name={weatherIcons.sunny} size={90} color={colors.white} />
            </View>
        </TouchableOpacity>
    );
};
