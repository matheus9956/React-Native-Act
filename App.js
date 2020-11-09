import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomePage from "./src/screens/HomePage";
const navigator = createStackNavigator(
  {
    Home: HomePage,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ACT",
    },
  }
);

export default createAppContainer(navigator);
