import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer} from "react-navigation";
import {SearchScreen} from "../screens/SearchLyricsModule/SearchScreen";
import {LyricsScreen} from "../screens/SearchLyricsModule/LyricsScreen";

const screens = {
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  Lyrics: {
    screen: LyricsScreen
  }
}

const SearchStackNavigator = createStackNavigator(screens)

export default createAppContainer(SearchStackNavigator)