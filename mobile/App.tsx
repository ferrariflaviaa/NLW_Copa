import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Text, Center } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="black">
        <Text color="white" fontSize={24}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}
