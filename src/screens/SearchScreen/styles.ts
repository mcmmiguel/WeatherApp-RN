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
    recentlyAddedText: {
        color: colors.white,
        fontSize: 25,
        letterSpacing: 0.8,
    },
});
