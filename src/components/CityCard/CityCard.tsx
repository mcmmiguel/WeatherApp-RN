import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const CityCard = () => {
    return (
        <View style={styles.mainContainer}>
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
    );
};
