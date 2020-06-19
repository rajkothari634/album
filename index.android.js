/**
 * @format
 */

import {AppRegistry} from 'react-native';
console.log('1');
import App from './App';
console.log('2');
import {name as appName} from './app.json';
console.log('3');
AppRegistry.registerComponent(appName, () => App);
console.log('4');
