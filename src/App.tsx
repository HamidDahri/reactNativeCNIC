import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DocumentScreen from './screens/DocumentScreen';
import CameraScreen from './screens/CameraScreen';
import CardScreen from './screens/CardScreen';
import VerifiedScreen from './screens/VerifiedScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DocumentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifiedScreen"
          component={VerifiedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Card"
          component={CardScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
