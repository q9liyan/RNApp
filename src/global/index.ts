import {Dimensions, StatusBar, Platform, PixelRatio} from 'react-native';

const  deviceInfo = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

const AppShareGlobal = {
    deviceInfo
}
export default AppShareGlobal