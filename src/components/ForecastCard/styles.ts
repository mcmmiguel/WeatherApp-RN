import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        height: 160,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.primary,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    icon: {
        width: 60,
        height: 60,
    },
    dateTime: {
        fontSize: 15,
        fontWeight: '300',
    },
    date: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: colors.black,
        fontWeight: '500',
        marginTop: -1,
        marginBottom: 5,
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    temperature: {
        marginTop: 3,
        fontSize: 22,
    },
});
