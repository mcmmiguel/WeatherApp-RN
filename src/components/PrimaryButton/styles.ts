import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
    primaryButton: {
        height: 45,
        width: 200,
        backgroundColor: colors.darkPrimary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        elevation: 6,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
