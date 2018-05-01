import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Style,
    Button,
} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";

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
    Home: {
        screen: HomePage,
        navigationOptions: {
            header: null,
        },
    },
    Zher: {
        screen: Zher,
        navigationOptions: {
            header: null,
        }
//         navigationOptions: {
//             title: '这世界',  // 导航栏的标题，或者Tab标题 tabBarLabel
//             // header: ({ state, setParams, goBack }) => {
//             //     let right;
//             //     if (state.params.isSelected) {
//             //         right = (<Button title="取消" onPress={() => setParams({ isSelected: false })}/>);
//             //     } else {
//             //         right = (<Button title="选择" onPress={() => setParams({ isSelected: true })}/>);
//             //     }
//             //     let left = (<Button title="返回" onPress={() => goBack()}/>);
//             //     let visible = false;  // 是否显示导航栏
//             //     return { right, left, visible };
//             // }, // 自定义的头部组件，使用该属性后系统的头部组件会消失，如果想在页面中自定义，可以设置为null，这样就不会出现页面中留有一个高度为64navigationBar的高度
//             header: ({ state, setParams, goBack }) => {
//                 let right = (<Button onPress={this.goBack.bind(this)} title="取消"/>)
//                 return right
//             },
//             headerTitle: '1111', // 头部的标题，即页面的标题
//             headerBackTitle: '222', //返回标题，默认为 title的标题
//             headerTruncatedBackTitle: '返回',// 返回标题不能显示时（比如返回标题太长了）显示此标题，默认为'Back'
//             // headerRight: '222', //头部右边组件
// // headerLeft：头部左边组件
// // headerStyle：头部组件的样式
//             headerTitleStyle: {
//                 backgroundColor: 'red',
//                 fontSize: 10,
//             },//头部标题的样式
// // headerBackTitleStyle：头部返回标题的样式
//             headerTintColor: '#0000CD', //头部颜色
// // headerPressColorAndroid：Android 5.0 以上MD风格的波纹颜色
// // gesturesEnabled：否能侧滑返回，iOS 默认 true ， Android 默认 false
//         },
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
}
// , {
//     animationEnabled: true, // 切换页面时不显示动画
//     tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
//     swipeEnabled: false, // 是否左右滑动,如果有DrawerNavigator,最好设置为false避免手势冲突
//     backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
//     tabBarOptions: {
//         activeTintColor: '#0F9C00', // 文字和图片选中颜色
//         inactiveTintColor: '#999', // 文字和图片默认颜色
//         showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
//         indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
//         style: {
//             backgroundColor: '#444', // TabBar 背景色
//             height:50
//         },
//         labelStyle: {
//             fontSize: 12, // 文字大小,
//             marginTop: 0,
//         },
//     },
// }
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