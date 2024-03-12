import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { PermissionsProvider } from './src/context';
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
    <NavigationContainer>
      <AppState>
        <StatusBar translucent backgroundColor={'transparent'} />
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
}

export default App;
