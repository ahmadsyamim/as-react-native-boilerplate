import {
  AppRegistry,
  YellowBox
} from 'react-native';
import App from './src/App';
import {
  gestureHandlerRootHOC
} from 'react-native-gesture-handler'


/**
 * React Native 0.54 warning message ignore.
 */
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillReceiveProps has been renamed,',
  'Warning: componentWillMount has been renamed,',
  'Module RCTImageLoader',
]);

AppRegistry.registerComponent('doobooApp', () => gestureHandlerRootHOC(App));