import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableHighlight, FlatList, ScrollView, Pressable } from 'react-native';
import NotePopup from './NotePopup';

export default function Notes() {
    const [notesList, setNotesList] =  useState(["test", "test2"])
    const [showPopup, setShowPopup] = useState(false)
    const [noteText, setNoteText] = useState("")

    function removeNote(){

    }

    const renderItem = ({ item }) => {
      return (
        <ScrollView scrollEnabled={true} style={styles.listItem}> 
          <Pressable onPress={() => removeNote} style={styles.removeBtn}><Text style={{fontSize: 10}}>X</Text></Pressable>
          <Text style={styles.listItemText}>{item}</Text>
        </ScrollView>
      );
    };

    return (
        <View style={styles.container}>
            <TouchableHighlight 
            activeOpacity={0.6}
            underlayColor="#000"
            style={styles.buttonContainer}>
                <Text style={styles.button} onPress={()=> setShowPopup(true)}>Add Note</Text>
            </TouchableHighlight>
            <FlatList
              data={notesList}
              renderItem={renderItem}
              keyExtractor={(index) => index}
              numColumns={2}
              style={styles.list}
            />
            {showPopup && <NotePopup noteText={noteText} setNoteText={setNoteText} setShowPopup={setShowPopup} setNotesList={setNotesList} notesList={notesList}></NotePopup>}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    position: 'relative'
  },
  text: {
    fontSize: 20
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 5,
    textAlign: 'center',
    padding: 10
  },
  buttonContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%',
    borderRadius: 5
  },
  cardContainer: {
    flex: 2,
    padding: 20,
    width: '100%',
    flexDirection: 'row'
  },
  list: {
    marginTop: 20
  },
  listItem: {
    width: '45%',
    margin: 10,
    backgroundColor: '#ffff88',
    aspectRatio: 1
  },
  listItemText: {
    padding: 12
  },
  removeBtn: {
    width: '100%',
    padding: 8,
    borderBottomColor: '#f2f280',
    borderBottomWidth: 1
  }
});
