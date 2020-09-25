import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps109433Navigator from '../features/Maps109433/navigator';
import UserProfile109429Navigator from '../features/UserProfile109429/navigator';
import Maps109383Navigator from '../features/Maps109383/navigator';
import Add-Item109382Navigator from '../features/Add-Item109382/navigator';
import Maps109378Navigator from '../features/Maps109378/navigator';
import UserProfile109374Navigator from '../features/UserProfile109374/navigator';
import Maps109293Navigator from '../features/Maps109293/navigator';
import Add-Item109292Navigator from '../features/Add-Item109292/navigator';
import Maps109288Navigator from '../features/Maps109288/navigator';
import UserProfile109284Navigator from '../features/UserProfile109284/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps109433: { screen: Maps109433Navigator },
UserProfile109429: { screen: UserProfile109429Navigator },
Maps109383: { screen: Maps109383Navigator },
Add-Item109382: { screen: Add-Item109382Navigator },
Maps109378: { screen: Maps109378Navigator },
UserProfile109374: { screen: UserProfile109374Navigator },
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
