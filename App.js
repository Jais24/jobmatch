import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { JobsProvider } from './src/context/JobsContext';
import { colors } from './src/styles/styles';
import WelcomeScreen from './src/screens/WelcomeScreen';
import JobListScreen from './src/screens/JobListScreen';
import JobDetailScreen from './src/screens/JobDetailScreen';
import PostJobScreen from './src/screens/PostJobScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <JobsProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: { backgroundColor: colors.background },
            headerTintColor: colors.primary,
            headerTitleStyle: { color: colors.text },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ title: 'JobMatch' }}
          />
          <Stack.Screen
            name="JobList"
            component={JobListScreen}
            options={{ title: 'Relevante job' }}
          />
          <Stack.Screen
            name="JobDetail"
            component={JobDetailScreen}
            options={{ title: 'Stilling' }}
          />
          <Stack.Screen
            name="PostJob"
            component={PostJobScreen}
            options={{ title: 'Opret stilling' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </JobsProvider>
  );
}
