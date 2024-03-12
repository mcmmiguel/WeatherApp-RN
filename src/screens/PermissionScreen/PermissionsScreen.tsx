import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { PermissionsContext } from '../../context';
import { PrimaryButton } from '../../components';
import { styles } from './styles';

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


