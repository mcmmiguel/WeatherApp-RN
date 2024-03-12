import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme';

const { height } = Dimensions.get('window');
const top = height * 0.6;

export const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 75,
        alignItems: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.primary,
    },
    icon: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
    },
    hour: {
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 5,
    },
    temperature: {
        fontSize: 20,
    },
});
