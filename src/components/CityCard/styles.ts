import { StyleSheet } from 'react-native';
import { colors } from '../../theme/theme';

export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 25,
        marginVertical: 10,
        borderRadius: 10,
    },
    degreesText: {
        color: colors.white,
        fontSize: 55,
    },
    coordenatesContainer: {
        flexDirection: 'row',
    },
    coordenatesText: {
        color: colors.white,
        marginRight: 15,
    },
    cityText: {
        color: colors.white,
        marginTop: 15,
    },
});
