import { Dimensions, StyleSheet } from 'react-native';


const { height } = Dimensions.get('window');
const top = height * 0.55;

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: '100%',
    },
    flatlistContainer: {
        position: 'absolute',
        top,
    },
});
