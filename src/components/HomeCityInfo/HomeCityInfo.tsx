import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import bgImage from '../../assets/background-img.png';
import { colors, globalStyle } from '../../theme/theme';
import { styles } from './styles';

export const HomeCityInfo = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={bgImage} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.mainContainer}>
                    <View>
                        <View style={styles.cityContainer}>
                            <Icon name="location-sharp" size={20} color={colors.white} />
                            <Text style={[globalStyle.textWhite]}>Armería</Text>
                        </View>
                        <Text style={[globalStyle.textWhite, styles.temperature]}>19°</Text>
                        <Text style={[globalStyle.textWhite, styles.weather]}>Clear</Text>
                        <View style={styles.coordsContainer}>
                            <Text style={[globalStyle.textWhite, styles.coords]}>Lat: <Text>25°</Text></Text>
                            <Text style={[globalStyle.textWhite, styles.coords]}>Long: <Text>25°</Text></Text>
                        </View>
                    </View>
                    <Icon name="location-sharp" size={90} color={colors.white} />
                </View>
            </ImageBackground>
        </View>
    );
};
