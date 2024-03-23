import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, SearchScreen } from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme';
// import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    shadowColor: '#fff',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    backgroundColor: colors.primary,
                    borderRadius: 20,
                    position: 'absolute',
                    paddingHorizontal: 10,
                    marginHorizontal: 10,
                    marginBottom: 10,
                    elevation: 2, //Borrar la linea superior del tab
                    borderTopWidth: 0, //Borrar la linea superior del tab
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ focused }) => {
                    let iconName: string;

                    switch (route.name) {
                        case 'Home':
                            iconName = `${focused ? 'home-sharp' : 'home-outline'}`;
                            break;
                        case 'Search':
                            iconName = `${focused ? 'heart-sharp' : 'heart-outline'}`;
                            break;
                    }
                    return <Icon name={iconName} size={30} color={'white'} />;
                },

            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
    );
};
