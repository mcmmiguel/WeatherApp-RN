import React from 'react';
import {
  View,
} from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { globalStyle } from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <View style={globalStyle.globalContainer}>
      <HomeScreen />
    </View>
  );
}

export default App;
