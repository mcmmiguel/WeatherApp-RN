import React, { useEffect } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { WEATHER_API_KEY } from '@env';
import { weatherAPI } from '../../api';
import { colors } from '../../theme';
import { styles } from './styles';
import { DebouncedSearchBarProps } from '../../interfaces';

export const DebouncedSearchBar = ({ searchQuery, setSearchQuery, setSearchResults }: DebouncedSearchBarProps) => {

    const handleSearch = async () => {
        try {
            const resp = await weatherAPI.get(`/weather?q=${searchQuery}&appid=${WEATHER_API_KEY}&units=metric`);
            setSearchResults([resp.data]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (searchQuery.length === 0) {
            setSearchResults([]);
            return;
        }

        setTimeout(() => {
            handleSearch();
        }, 1000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    return (
        <View style={styles.searchBarContainer}>
            <Icon style={styles.searchIcon} name="search-outline" size={25} color={colors.white} />
            <TextInput
                style={styles.searchBar}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Ex. Salamanca, ES"
                placeholderTextColor={colors.white}
            />
        </View>
    );
};
