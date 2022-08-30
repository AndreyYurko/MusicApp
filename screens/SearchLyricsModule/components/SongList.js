import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export const SongList = ({data, pressHandler}) => {

  const SongContainer = (props) => (
    <View style={styles.songContainer}>
      <View style={{ flex:1 }}>
        <Text style={styles.textSongNameStyle}>
          {props.song.songName}
        </Text>
        <Text style={styles.textArtistNameStyle}>
          {props.song.artistName}
        </Text>
      </View>
      <TouchableOpacity onPress={() => pressHandler(props.song)}>
        <Text style={styles.textLyricsStyle}>
          Lyrics
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.list}>
      <FlatList
        style={{padding: 16}}
        keyExtractor={(item) => (item.id)}
        data={data}
        renderItem={({item}) => (
          <SongContainer song={item}/>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  songContainer: {
    padding: 8,
    flexDirection: 'row'
  },
  textSongNameStyle: {
    fontSize: 16,
    color: '#000',
    justifyContent: "flex-start"
  },
  textArtistNameStyle: {
    fontSize: 12,
    color: '#333',
    justifyContent: "flex-end"
  },
  textLyricsStyle: {
    fontSize: 20,
    color: '#000',
    alignItems: 'center'
  }
});