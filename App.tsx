import React from 'react';
// import {
//   View,
// } from 'react-native';
import 'react-native-gesture-handler';
// import { globalStyle } from './src/theme/theme';
import { PermissionsProvider } from './src/context/PermissionsContext';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { StatusBar } from 'react-native';

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  );

};

function App(): React.JSX.Element {
  return (
    // <View style={globalStyle.globalContainer}>
    <NavigationContainer>
      <AppState>
        <StatusBar translucent backgroundColor={'transparent'} />
        <StackNavigator />
      </AppState>
    </NavigationContainer>
    // </View>
  );
}

export default App;
