import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginTop: '10%',
    },
    cityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    weatherIcon: {
        height: 200,
        width: 200,
        resizeMode: 'cover',
    },
    cityText: {
        fontSize: 20,
        letterSpacing: 0.8,
    },
    temperature: {
        fontSize: 85,
    },
    weather: {
        fontSize: 20,
        marginTop: 15,
        fontWeight: '300',
        letterSpacing: 1,
    },
    coordsContainer: {
        flexDirection: 'row',
        gap: 25,
    },
    highlow: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: '500',
    },
});
