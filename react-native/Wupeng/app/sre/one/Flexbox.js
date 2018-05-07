/*
 * @Author: Wupeng
 * @Date: 2018-05-02 19:17:41 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-02 20:42:50
 * 在React Native中使用flexbox
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
} from 'react-native'


export default class Flexbox extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const Data = new FormData()
        console.log(Data)
        return(
            <View style={{ flex: 1}}>
                <ScrollView>
                    {/* <View */}
                </ScrollView>
            </View>
        )
    }
}