import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          {!boarding ? (
            <GetStarted />
          ) : (
            <Tabs />
          )}
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}