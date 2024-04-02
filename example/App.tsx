import { StyleSheet, Text, View } from 'react-native';

import * as ExpoApplemusic from 'expo-applemusic';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoApplemusic.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
