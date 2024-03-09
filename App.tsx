import React from 'react';
// import {
//   View,
// } from 'react-native';
import 'react-native-gesture-handler';
// import { globalStyle } from './src/theme/theme';
import { PermissionsProvider } from './src/context/PermissionsContext';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';

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
        <StackNavigator />
      </AppState>
    </NavigationContainer>
    // </View>
  );
}

export default App;
