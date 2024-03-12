import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsContext } from '../context';
import { HomeScreen, LoadingScreen, PermissionsScreen, SearchScreen } from '../screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {

    const { permissions } = useContext(PermissionsContext);

    if (permissions.locationStatus === 'unavailable') {
        return <LoadingScreen />;
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>
            {(permissions.locationStatus === 'granted')
                ?
                (<>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="SearchScreen" component={SearchScreen} />
                </>)
                : <Stack.Screen name="PermissionScreen" component={PermissionsScreen} />
            }
        </Stack.Navigator>
    );
};
