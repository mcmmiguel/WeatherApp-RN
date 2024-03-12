import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export const LoadingScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <ActivityIndicator
                size={50}
                color="black"
            />
        </View>
    );
};
