import { useState } from 'react';
import { UserLocation } from '../interfaces';
import Geolocation from '@react-native-community/geolocation';

export const useLocation = () => {
    const [userLocation, setUserLocation] = useState<UserLocation>({
        latitude: 0,
        longitude: 0,
    });


    const getCurrentLocation = (): Promise<UserLocation> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {

                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    });

                },
                (err) => reject(new Error(err)), { enableHighAccuracy: true }
            );
        });
    };

    return {
        userLocation,
        setUserLocation,
        getCurrentLocation,
    };
};

