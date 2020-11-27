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
import { Provider } from "./src/context/FamilyContext";
import React from "react";
import FormScreen from "./src/screens/FormScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const TabNavigator = createBottomTabNavigator(
  {
    Register: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        tabBarLabel: "Cadastrar",
      }),
    },
    Families: {
      screen: FamiliesScreen,
      navigationOptions: () => ({
        tabBarLabel: "Famílias",
      }),
    },
    Groups: {
      screen: GroupsScreen,
      navigationOptions: () => ({
        tabBarLabel: "Grupos",
      }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarLabel: "Ajustes",
      }),
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Register") {
          iconName = focused ? "ios-list-box" : "ios-list";
        } else if (routeName === "Settings") {
          iconName = focused ? "ios-list-box" : "ios-list";
        } else if (routeName === "Families") {
          iconName = focused ? "ios-list-box" : "ios-list";
        } else if (routeName === "Groups") {
          iconName = focused ? "ios-list-box" : "ios-list";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#0080ff",
      inactiveTintColor: "gray",
    },
  }
);

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Tab: TabNavigator,
    Family: FamilyScreen,
    Group: GroupScreen,
    Form: FormScreen,
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
