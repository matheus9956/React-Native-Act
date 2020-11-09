import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomePage from "./src/pages/HomePage";
import RegisterPage from "./src/pages/RegisterPage";
import GroupsPage from "./src/pages/GroupsPage";
import FamiliesPage from "./src/pages/FamiliesPage";
import SettingsPage from "./src/pages/SettingsPage";
import FamilyPage from "./src/pages/FamilyPage";
import GroupPage from "./src/pages/GroupPage";

const TabNavigator = createBottomTabNavigator({
  Register: RegisterPage,
  Families: FamiliesPage,
  Groups: GroupsPage,
  Settings: SettingsPage,
});

const navigator = createStackNavigator(
  {
    Home: HomePage,
    Tab: TabNavigator,
    Family: FamilyPage,
    Group: GroupPage,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ACT",
    },
  }
);

export default createAppContainer(navigator);
