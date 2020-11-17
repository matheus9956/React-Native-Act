import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import GroupsScreen from "./src/screens/GroupsScreen";
import FamiliesScreen from "./src/screens/FamiliesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import FamilyScreen from "./src/screens/FamilyScreen";
import GroupScreen from "./src/screens/GroupScreen";
import { Provider } from "./src/context/Context";
import React from "react";

const TabNavigator = createBottomTabNavigator({
  Register: RegisterScreen,
  Families: FamiliesScreen,
  Groups: GroupsScreen,
  Settings: SettingsScreen,
});

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Tab: TabNavigator,
    Family: FamilyScreen,
    Group: GroupScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ACT",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
