import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#0077B6',
    darkPrimary: '#03045E',
    secondary: '#90E0EF',
    lightSecondary: '#CAF0F8',
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
});
