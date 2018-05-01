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