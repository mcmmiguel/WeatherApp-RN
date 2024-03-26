import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#395886',
    darkPrimary: '#628ECB',
    secondary: '#8AAEE0',
    lightSecondary: '#B1C9EF',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#E1E1E1',
};

export const globalStyle = StyleSheet.create({
    globalContainer: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
    },
    textWhite: {
        color: colors.white,
    },
});
