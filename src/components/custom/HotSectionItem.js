
import React, { PureComponent } from "react";
import { Image, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import DesignConvert from '../../utils/DesignConvert';

export default class HotSectionItem extends PureComponent {

    render() {
        return (
            <TouchableOpacity
                style={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: DesignConvert.getW(160),
                    height: DesignConvert.getH(80),
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    marginTop: DesignConvert.getH(8),
                    borderRadius: DesignConvert.getW(8)
                }}
                onPress={this.props.onPress}
            >
                <Image
                    style={{
                        color: "#1D1D1D",
                        width: DesignConvert.getW(36),
                        height: DesignConvert.getW(36),
                    }}
                    source={this.props.img}
                />
                <Text
                    
                    style={{
                        fontSize: DesignConvert.getF(13),
                    }}>
                    {this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}