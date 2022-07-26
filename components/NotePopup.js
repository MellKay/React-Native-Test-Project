import { StyleSheet, Text, View, StatusBar, TextInput, TouchableHighlight } from 'react-native';

export default function NotePopup({ noteText, setNoteText, setShowPopup, notesList, setNotesList }) {

  function saveNote(){
      setShowPopup(false)
      setNotesList([noteText, ...notesList])
      setNoteText("")
  }

  return (
      <View style={styles.container}>
          <Text>Write Note:</Text>
          <TextInput
            multiline={true}
            style={styles.input}
            onChangeText={(text) => setNoteText(text)}
            value={noteText}
          />
          <TouchableHighlight 
          activeOpacity={0.6}
          underlayColor="#000"
          style={styles.buttonContainer}>
              <Text style={styles.button} onPress={() => saveNote()}>Save</Text>
          </TouchableHighlight>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  input: {
    borderWidth: 1,
    padding: 10
  }
});
