// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import Notes from './components/Notes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Test Project</Text>
        <Notes></Notes>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 2 : 0
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
