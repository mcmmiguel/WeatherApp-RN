import React, { createContext, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';
import { PermissionStatus, PERMISSIONS, request, check, openSettings } from 'react-native-permissions';

//Así lucirá el estado
export interface PermissionsState {
    locationStatus: PermissionStatus;
}

//Estado inicial
export const permissionInitState: PermissionsState = {
    locationStatus: 'unavailable',
};

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

//Creación del contexto
export const PermissionsContext = createContext({} as PermissionsContextProps);


//Provider
export const PermissionsProvider = ({ children }: any) => {
    const [permissions, setPermissions] = useState(permissionInitState);

    useEffect(() => {

        checkLocationPermission();

        AppState.addEventListener('change', (state) => {
            if (state !== 'active') { return; }
            checkLocationPermission();
        });
    },);

    const askLocationPermission = async () => {
        let permissionsStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionsStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        } else {
            permissionsStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        if (permissionsStatus === 'blocked') {
            openSettings();
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionsStatus,
        });

    };

    const checkLocationPermission = async () => {
        let permissionsStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionsStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        } else {
            permissionsStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionsStatus,
        });

    };


    return (
        <PermissionsContext.Provider
            value={{
                permissions,
                askLocationPermission,
                checkLocationPermission,
            }}
        >
            {children}
        </PermissionsContext.Provider>
    );
};
