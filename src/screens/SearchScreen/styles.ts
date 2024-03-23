import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: '100%',
    },
    mainContainer: {
        marginHorizontal: 10,
    },
    searchBarContainer: {
        marginVertical: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
    },
    searchIcon: {
        marginLeft: 10,
        marginRight: 5,
    },
    searchBar: {
        flex: 1,
        borderRadius: 10,
        fontSize: 17,
        color: colors.white,
    },
    recentlyAddedText: {
        color: colors.white,
        fontSize: 25,
        letterSpacing: 0.8,
    },
});
