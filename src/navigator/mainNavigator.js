import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps109293Navigator from '../features/Maps109293/navigator';
import Add-Item109292Navigator from '../features/Add-Item109292/navigator';
import Maps109288Navigator from '../features/Maps109288/navigator';
import UserProfile109284Navigator from '../features/UserProfile109284/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps109293: { screen: Maps109293Navigator },
Add-Item109292: { screen: Add-Item109292Navigator },
Maps109288: { screen: Maps109288Navigator },
UserProfile109284: { screen: UserProfile109284Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
