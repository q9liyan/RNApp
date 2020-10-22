/**
 * 主界面 -> 首页 -> banner
 */
'use strict';

import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import Config from '../../../configs/Config';
import DesignConvert from '../../../utils/DesignConvert';


class ImageTouchableBox extends Component {
  constructor(props) {
    super(props);


    // this._onPress = props.onPress;
    // this._item = props.item;

  }

  _onItemPress = () => {
    if (!this.props.item) {
      this.props.onPress();
      return
    }
    this.props.onPress(this.props.item);
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this._onItemPress}
        style={{
          width: DesignConvert.getW(this.props.width),
          height: DesignConvert.getH(this.props.height),
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: DesignConvert.getW(this.props.width),
            height: DesignConvert.getH(this.props.height),
            // resizeMode: 'contain',
            borderRadius: DesignConvert.getW(10),

          }}
          resizeMethod="auto"
          source={
            this.props.url
              ? { uri: Config.getBannerUrl(this.props.url) }
              : require('../../../hardcode/skin_imgs/main.js').banner_demo()
          }
        />
      </TouchableOpacity>
    )
  }
}

export default class BannerSwiper extends Component {

  constructor(props) {
    super(props);

    // this._bannerList = [];
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     // console.log('刷新banner============', nextProps)
  //     this._bannerList = nextProps.bannerList;
  //     return true;
  // }

  _renderDotIndicator = count => <PagerDotIndicator
    dotStyle={{
      marginTop: DesignConvert.getH(7),
      width: DesignConvert.getW(8),
      height: DesignConvert.getH(2),
      borderRadius: DesignConvert.getW(3),
      backgroundColor: 'rgba(255, 255, 255, 0.36)'
    }}
    selectedDotStyle={{
      marginTop: DesignConvert.getH(7),
      width: DesignConvert.getW(8),
      height: DesignConvert.getH(2),
      borderRadius: DesignConvert.getW(3),
      backgroundColor: '#FFFFFF'

    }}
    pageCount={count}
  />;

  _onBannnerPress = (item) => {
    switch (item.type) {
      case 2:

        break;
      case 3:
        require('../../../router/level3_router').openActivityWebView(item.targetobject)
        break;
      default:
        require("../../../router/level2_router").showMyWebView(item.title, item.targetobject);
        break
    }
  }

  render() {
    // console.log('banner的数据', this.props.bannerList.length)
    if (this.props.bannerList.length == 0) {
      return (
        <View>
          <TouchableOpacity
            onPress={this._onBannnerPress}
            style={{
              width: DesignConvert.getW(335),
              height: DesignConvert.getH(120),
              // backgroundColor: 'red'
            }}>
            <ImageTouchableBox
              width={335}
              height={120}
              onPress={() => { }}
            />
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this._onBannnerPress}
        style={{
          marginTop: DesignConvert.getH(10),

          width: DesignConvert.getW(345),
          height: DesignConvert.getH(130),
          borderRadius: DesignConvert.getW(10),
          overflow: 'hidden',
        }}>
        <IndicatorViewPager
          keyboardDismissMode={'none'}
          autoPlayEnable
          style={{ height: DesignConvert.getH(130) }}
          indicator={this._renderDotIndicator(this.props.bannerList.length)}>
          {this.props.bannerList.map(item => (
            <View
              style={{
                // backgroundColor: 'red',
              }}
              key={item.id}>
              <ImageTouchableBox
                width={345}
                height={130}
                url={item.bannerurl}
                onPress={this._onBannnerPress}
                item={item}
              />
            </View>
          ))}
        </IndicatorViewPager>
      </TouchableOpacity>
    )
  }
}