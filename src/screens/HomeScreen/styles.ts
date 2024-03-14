import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme';


const { height } = Dimensions.get('window');
const top = height * 0.50;

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: '100%',
    },
    forecastContainer: {
        position: 'absolute',
        alignItems: 'center',
        top,
        marginHorizontal: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(15, 15, 15, 0.1)',
    },
    forecastTextContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: 15,
        marginBottom: 10,
        paddingHorizontal: 90,
        paddingVertical: 10,
        borderRadius: 10,
    },
    forecastText: {
        color: colors.darkPrimary,
        textTransform: 'capitalize',
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        fontWeight: '600',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    forecastFlatList: {

    },
});
