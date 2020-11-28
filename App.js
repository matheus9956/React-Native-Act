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

import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

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
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;
        if (routeName === "Register") {
          IconComponent = FontAwesome;
          iconName = focused ? "address-book" : "address-book-o";
        } else if (routeName === "Settings") {
          IconComponent = MaterialCommunityIcons;
          iconName = focused ? "settings" : "settings-outline";
        } else if (routeName === "Families") {
          iconName = focused ? "people" : "people-outline";
        } else if (routeName === "Groups") {
          IconComponent = Ionicons;
          iconName = focused ? "ios-list-box" : "ios-list";
        }

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
    Tab: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => {
        const routeName =
          navigation.state.routes[navigation.state.index].routeName;
        let name;

        if (routeName === "Register") {
          name = "Cadastrar";
        }
        if (routeName === "Families") {
          name = "Famílias";
        }
        if (routeName === "Groups") {
          name = "Grupos";
        }
        if (routeName === "Settings") {
          name = "Ajustes";
        }

        return { title: name, headerLeft: () => null };
      },
    },
    Family: FamilyScreen,
    Group: GroupScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitleStyle: { alignSelf: "center" },
      headerTitleContainerStyle: {
        left: 0,
      },
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
