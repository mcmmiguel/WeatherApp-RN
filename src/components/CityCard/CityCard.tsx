import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CityCardProps } from '../../interfaces/interfaces';

const weatherIcons = {
    sunny: 'sunny-outline',
};

export const CityCard = ({ degrees, lat, long, city, state }: CityCardProps) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.infoContainer}>
                <Text style={styles.degreesText}>20°</Text>
                <View style={styles.coordenatesContainer}>
                    <Text style={styles.coordenatesText}>
                        Lat
                        <Text style={styles.coordenatesText}>18.2°</Text>
                    </Text>
                    <Text style={styles.coordenatesText}>
                        Long
                        <Text style={styles.coordenatesText}>18.2°</Text>
                    </Text>
                </View>
                <Text style={styles.cityText}>
                    Armeria,
                    <Text style={styles.cityText}> Colima</Text>
                </Text>
            </View>

            <View>
                <Text>ICON</Text>
            </View>
        </View>
    );
};
