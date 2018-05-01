import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native'

export default class Zher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {
                isSelected: true,
            },
        }
    }
        // 或这样
        static navigationOptions = {
            title: 'Two', // 固定标题
            // title: (navigation, childRouter) => {  // 动态标题
            //     if (navigation.state.params.isSelected) {
            //         return `${navigation.state.params.name}选中`;
            //     } else {
            //         return `${navigation.state.params.name}没选中`;
            //     }
            // },
            // header: ({ state, setParams, goBack }) => {
            //     let right = (<Button title="取消" onPress={() => setParams({ isSelected: false })}/>);
            //     // if (true) {
            //     //     right = (<Button title="取消" onPress={() => setParams({ isSelected: false })}/>);
            //     // } else {
            //     //     right = (<Button title="选择" onPress={() => setParams({ isSelected: true })}/>);
            //     // }
            //     let left = (<Button title="返回" onPress={() => goBack()}/>);
            //     let visible = false;  // 是否显示导航栏
            //     return { right, left, visible };
            // },
            // // header: {left: <Button title="返回"/>},
            }
    componentDidMount() {
        console.log('this', this.props)
    }
    render() {
        return (
            <View>
                <Text onPress={()=>{this.props.navigation.goBack()}}>这就是第一个跳转</Text>
            </View>
        )
    }
}