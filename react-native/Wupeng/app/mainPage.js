import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Style,
    Button,
    TouchableOpacity,
} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Feather'

import HomePage from './sre/HomePage';
import OderPage from './sre/OderPage';
import MinePage from './sre/MinePage';
import Zher from './sre/one/one'

const One = {
    header: null,
    tabBarLabel: '1',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={
                require('./images/cert0.png')
            }
            style={[styles.icon,{tintColor: 'red' }]}// {tintColor: tintColor} 选中的图片和文字颜色
        />
    ),
    headerTitleStyle: {
        alignSelf:'center'
    }
}
const Two = {
    header: null,
    tabBarLabel: '2',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={
                require('./images/cert0.png')
            }
            style={[styles.icon,{tintColor: tintColor }]}// {tintColor: tintColor} 选中的图片和文字颜色
        />
    ),
    headerTitleStyle: {
        alignSelf:'center'
    }
}
const Three = {
    header: null,
    tabBarLabel: '3',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={
                require('./images/cert0.png')
            }
            style={[styles.icon,{tintColor: 'red' }]}// {tintColor: tintColor} 选中的图片和文字颜色
        />
    ),
    headerTitleStyle: {
        alignSelf:'center'
    }
}
goBack = () => {
    console.log(this.props)
}
const mainPage = StackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null,
        },
    },
    Zher: {
        screen: Zher,
        navigationOptions: (navigation) => {
            console.log(navigation)
            const { state } = navigation.navigation
            const headerStyle = { backgroundColor: '#1B82D2', elevation: 0};
            const headerTitle = state.params.title
            const headerTitleStyle = {
                        fontSize: 20,
                        color: 'white',
                        fontWeight: '500',
                        alignSelf: 'center',
                }
            const headerBackTitle = false
            return { headerStyle, headerTitle, headerTitleStyle, headerBackTitle }
        },
        // navigationOptions: {
        //     
        //
        //     headerLeft: ( navigation ) => {
        //         console.log(navigation)
        //     //  return (
        //     //     <TouchableOpacity
        //     //       onPress={() => {
        //     //         // goBack()
        //     //         DeviceEventEmitter.emit('goBack')
        //     //         // state.params.leftClick()
        //     //         if (state.params.leftClick) {
        //     //           state.params.leftClick()
        //     //         }
        //     //       }}
        //     //     >
        //     //       <View
        //     //         style={{
        //     //           width: 50,
        //     //           height: '100%',
        //     //           justifyContent: 'center',
        //     //           alignItems: 'center',
        //     //         }}
        //     //       >
        //     //         <Icon name="chevron-left" size={24} color="white" />
        //     //       </View>
        //     //     </TouchableOpacity>
        //     //   )
        //     },
        // }
        // navigationOptions配置参数
        // title：导航栏的标题，或者Tab标题 tabBarLabel
        // header：自定义的头部组件，使用该属性后系统的头部组件会消失，如果想在页面中自定义，可以设置为null，这样就不会出现页面中留有一个高度为64navigationBar的高度
        // header: 导航栏设置对象
        //     visible: 导航栏是否显示
        //     title: 导航栏的标题, 可以是字符串也可以是个组件
        //     backTitle: 左上角的返回键文字, 默认是上一个页面的title
        //     right: 导航栏右按钮
        //     left: 导航栏左按钮
        //     style: 导航栏的style
        //     titleStyle: 导航栏的title的style
        //     tintColor: 导航栏颜色
        // headerTitle：头部的标题，即页面的标题
        // headerBackTitle：返回标题，默认为 title的标题
        // headerTruncatedBackTitle：返回标题不能显示时（比如返回标题太长了）显示此标题，默认为'Back'
        // headerRight：头部右边组件
        // headerLeft：头部左边组件
        // headerStyle：头部组件的样式
        // headerTitleStyle：头部标题的样式
        // headerBackTitleStyle：头部返回标题的样式
        // headerTintColor：头部颜色
        // headerPressColorAndroid：Android 5.0 以上MD风格的波纹颜色
        // gesturesEnabled：否能侧滑返回，iOS 默认 true ， Android 默认 false
    },
    Oder: {
        screen: OderPage,
        navigationOptions: Two,
    },
    Mine: {
        screen: MinePage,
        //以下参数也可放置在MinePage.js页面
        navigationOptions: Three,
    },
},
{
    initialRouteName: 'HomePage', // 导航器组件中初始显示页面的路由名称，如果不设置，则默认第一个路由页面为初始显示页面
    initialRouteParams: {initPara: '初始页面参数'}, // 给初始路由的参数，在初始显示的页面中可以通过this.props.navigation.state.params来获取
    navigationOptions: {
      title: '标题',
      headerTitleStyle: {fontSize: 18, color: 'red'},
      headerStyle: {height: 49},
    }, // 路由页面的全局配置项
    // paths: 'Wupeng://sre/HomePage', // RouteConfigs里面路径设置的映射
    // 页面跳转方式，有card和modal两种，默认为 card
    // card：普通app常用的左右切换
    // modal：只针对iOS平台，类似于iOS中的模态跳转，上下切换
    mode: 'card',
    headerMode: 'screen',
    // headerMode：页面跳转时，头部的动画模式，有 float 、 screen 、 none 三种
    // float：渐变，类似iOS的原生效果，无透明，默认方式
    // screen：标题与屏幕一起淡入淡出，如微信QQ的一样
    // none：没有动画
    cardStyle: {backgroundColor: "#ffffff"}, // 为各个页面设置统一的样式，比如背景色，字体大小等    
    transitionConfig: (() => ({
    })), // 配置页面跳转的动画，覆盖默认的动画效果
    onTransitionStart: (() => {
      console.log('页面跳转动画开始')
    }), // 页面跳转动画即将开始时调用
    onTransitionEnd: (() => {
      console.log('页面跳转动画结束')
    }), // 页面跳转动画一旦完成会马上调用
  }
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:20,
        height:20
    }
});
module.exports = mainPage;