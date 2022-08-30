import { ActivityIndicator, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react'
import {SongList} from "./components/SongList";
import {SearchView} from "./components/SearchView";
import {searchGenius} from "../../utils/SearchLyricsModule/GeniusApi";

export const SearchScreen = ({ navigation }) => {

  const [isLoading, setLoading] = useState(false);
  const [songs, setSongs] = useState([])

  const pressLyrics = (song) => {
    //console.log(song);
    navigation.navigate('Lyrics', song)
  }

  const onSearchButtonPressed = (query) => {
    //console.log("pressed")
    setLoading(true)
    searchGenius(query).then(songsList => {
      setLoading(false)
      setSongs(songsList)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss
    }}>
      <View style={styles.container}>
        <SearchView onSearchButtonPressed={onSearchButtonPressed}/>
        {isLoading ? <ActivityIndicator style={styles.loadSongs} size={'large'}/> : (
          <SongList
            data={songs}
            pressHandler={pressLyrics}
          />
        )}
      </View>

    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadSongs: {
    flex: 1,
    backgroundColor: '#ccc'
  }
});
