import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList579455Navigator from '../features/ArticleList579455/navigator';
import ArticleList279453Navigator from '../features/ArticleList279453/navigator';
import ArticleList379452Navigator from '../features/ArticleList379452/navigator';
import ArticleList479451Navigator from '../features/ArticleList479451/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList579455: { screen: ArticleList579455Navigator },
ArticleList279453: { screen: ArticleList279453Navigator },
ArticleList379452: { screen: ArticleList379452Navigator },
ArticleList479451: { screen: ArticleList479451Navigator },

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
