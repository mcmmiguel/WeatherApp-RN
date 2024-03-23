import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { colors } from '../../theme/theme';
import { CityCardProps } from '../../interfaces';

export const CityCard = ({ id, temperature, coord, name, countryCode, weather, isSaved = false, onSave }: CityCardProps) => {

    const [isFavorite, setIsFavorite] = useState(isSaved);

    return (
        <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.infoContainer}>
                <Text style={styles.degreesText}>{temperature}°</Text>
                <View style={styles.coordenatesContainer}>
                    <Text style={styles.coordenatesText}>
                        Lat:
                        <Text style={styles.coordenatesText}> {coord.lat}°</Text>
                    </Text>
                    <Text style={styles.coordenatesText}>
                        Long:
                        <Text style={styles.coordenatesText}> {coord.lon}°</Text>
                    </Text>
                </View>
                <Text style={styles.cityText}>
                    {name},
                    <Text style={styles.cityText}> {countryCode}</Text>
                </Text>
            </View>

            <View style={styles.actionPanel}>
                <Image
                    source={{ uri: `https://openweathermap.org/img/wn/${weather && weather.length > 0 ? weather[0].icon : ''}@4x.png` }}
                    style={styles.weatherIcon}
                />
                <TouchableOpacity
                    onPress={() => {
                        const newIsFavorite = !isFavorite;
                        setIsFavorite(newIsFavorite);
                        onSave({
                            id,
                            isSaved: newIsFavorite,
                            name,
                            temperature,
                            coord,
                            countryCode,
                            weather,
                        });
                    }}
                >
                    <Icon name={isFavorite ? 'add-circle-sharp' : 'add-circle-outline'} size={30} color={colors.white} style={styles.favoriteButton} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};
