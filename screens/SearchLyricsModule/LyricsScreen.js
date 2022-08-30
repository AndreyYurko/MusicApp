import { StyleSheet, View, Text} from 'react-native';

export const LyricsScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}> { navigation.getParam('songName') } </Text>
      <Text style={styles.title}> { navigation.getParam('artistName') } </Text>
      <Text style={styles.title}> { navigation.getParam('id') } </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    padding: 4,
    fontSize: 24
  }
});