import {StyleSheet, TextInput, View, Button} from 'react-native';
import { useState } from 'react'

export const SearchView = ({ onSearchButtonPressed }) => {
  const [query, setQuery] = useState('')

  const onChangeQuery = (text) => {
    setQuery(text)
    //console.log(text)
  }

  const onPressHandler = () => {
    // TODO: figure out why if i pass this function in onPass, it invokes almost every time
    onSearchButtonPressed(query)
  }

  return(
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.queryTextInput}
        placeholder={'E.g. Skillet Monster'}
        onChangeText={onChangeQuery}
      />
      <Button
        title='Search'
        onPress={onPressHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 40,
    flexDirection: 'row',
    marginHorizontal: 4
  },
  queryTextInput: {
    flex: 1,
  }
});