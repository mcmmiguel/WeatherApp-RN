import { StyleSheet } from 'react-native';
import { colors } from '../../theme/theme';

export const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingRight: 25,
        paddingLeft: 25,
        marginVertical: 10,
        borderRadius: 10,
    },
    infoContainer: {

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
