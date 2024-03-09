import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PermissionsContext } from '../../context/PermissionsContext';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';

export const PermissionsScreen = () => {

    const { askLocationPermission } = useContext(PermissionsContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Es necesario el uso de GPS para utilizar esta aplicación</Text>

            <PrimaryButton
                title="Permiso"
                onPress={askLocationPermission}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: '75%',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
});
