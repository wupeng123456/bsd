/*
 * @Author: Wupeng 
 * @Date: 2018-05-09 14:23:57 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-09 14:27:39
 * View 组件
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'

export default class ViewW extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item, styles.center, styles.border1]}>
                    <Text key={1} style={{ color: 'white'}}>酒店</Text>
                </View>
                <View style={styles.item}>
                    <View style={[styles.flex, styles.center, styles.border5]}>
                        <Text key={2} style={{ color: 'white'}}>海外酒店</Text>
                    </View>
                    <View style={[styles.flex, styles.center]}>
                        <Text key={3} style={{ color: 'white'}}>特惠酒店</Text>
                    </View>
                </View>
                <View style={[styles.item, styles.border4]}>
                    <View style={[styles.flex, styles.center, styles.border2]}>
                        <Text key={4} style={{ color: 'white'}}>客栈</Text>
                    </View>
                    <View style={[styles.flex, styles.center, styles.border3]}>
                        <Text key={5} style={{ color: 'white'}}>特惠</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: 1,
        // borderColor: 'red',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    item: {
        flex: 1,
        height: 80,
        // borderWidth: 1,
        // borderColor: 'blue',
    },
    center: {
        justifyContent: 'center', //justifyContent
        alignItems: 'center',
        backgroundColor: '#f631bb',
    },
    flex: {
        flex: 1,
        // backgroundColor: '#f631bb',
    },
    border1: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius:5,
        borderRightWidth: 1,
        borderRightColor: 'white',
    },
    border2: {
        borderTopRightRadius: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
    },
    border3: {
        borderBottomRightRadius: 5,
    },
    border4: {
        borderLeftWidth: 1,
        borderLeftColor: 'white',
    },
    border5: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
    },
})