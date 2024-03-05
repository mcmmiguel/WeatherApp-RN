import React from 'react';
import { View } from 'react-native';
import { CityCard } from '../../components/CityCard/CityCard';

export const HomeScreen = () => {
    return (
        <View>
            <CityCard
                city="Armería"
                temperature="20"
                lat={15}
                long={15}
                state="Colima"
            />
        </View>
    );
};
