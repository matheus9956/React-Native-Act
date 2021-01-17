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
import FormScreen from "./src/screens/FormScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { Provider as FormProvider } from "./src/context/FormContext";
import { Provider as FamilyProvider } from "./src/context/FamilyContext";
import { Provider as RegisterProvider } from "./src/context/RegisterContext";
import { Provider as GroupProvider } from "./src/context/GroupContext";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
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
    ResolveAuth: ResolveAuthScreen,
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Login",
        header: () => null,
      },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null,
      },
    },
    Tab: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => {
        const routeName =
          navigation.state.routes[navigation.state.index].routeName;
        let nameTitle;

        if (routeName === "Register") {
          nameTitle = "Cadastrar";
        }
        if (routeName === "Families") {
          nameTitle = "Famílias";
        }
        if (routeName === "Groups") {
          nameTitle = "Grupos";
        }
        if (routeName === "Settings") {
          nameTitle = "Ajustes";
        }

        return { title: nameTitle, header: () => null };
      },
    },
    Group: {
      screen: GroupScreen,
      navigationOptions: {
        title: "Grupo",
      },
    },
    Form: {
      screen: FormScreen,
      navigationOptions: {
        title: "Questionário",
      },
    },
    Family: {
      screen: FamilyScreen,
      navigationOptions: {
        title: "Família",
      },
    },
  },
  {
    initialRouteName: "ResolveAuth",
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
    <AuthProvider>
      <RegisterProvider>
        <FamilyProvider>
          <FormProvider>
            <GroupProvider>
              <App
                ref={(navigator) => {
                  setNavigator(navigator);
                }}
              />
            </GroupProvider>
          </FormProvider>
        </FamilyProvider>
      </RegisterProvider>
    </AuthProvider>
  );
};
