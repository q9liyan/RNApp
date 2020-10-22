/**
 * @format
 */


import 'react-native-gesture-handler';


//-----------------不能删除的部分-----------------begin
import 'react-native-root-siblings'
//-----------------不能删除的部分-----------------end

import {AppRegistry} from 'react-native';

import App from './App';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);
