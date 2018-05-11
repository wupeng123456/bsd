/*
 * @Author: Wupeng
 * @Date: 2018-05-02 13:16:22 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-09 14:30:50
 * Home
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { NavigationActions } from 'react-navigation'// NavigationActions
import DrawPage from './DrawPage'
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        // console.log('1', this.props.navigation)
        // 获取页面参数
    }
    one = () => {
        this.props.navigation.navigate('Zher', {
            title: 'react-native之flex-box布局',
        },)
    }
    Two = (e, x) => {
        this.props.navigation.navigate(e, {
            title: x,
        })
    }
    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.contend}>
                  <Text>react-native</Text>
                </View>
                <View>
                  <View style={styles.View}>
                    <Text style={styles.Text} onPress={this.one.bind(this)}>1.react-native之flex-box布局</Text>
                  </View>
                  <View style={styles.View}>
                    <Text style={[styles.Text, { backgroundColor: 'white'}]} onPress={this.Two.bind(this, 'Order', 'react-native之伸缩项目的属性')}>2.react-native之伸缩项目的属性</Text>
                  </View>
                  <View style={styles.View}>
                    <Text style={[styles.Text, { backgroundColor: 'white'}]} onPress={this.Two.bind(this, 'Flexbox', 'react-native之在React Native中使用flexbox')}>3.react-native之在React Native中使用flexbox</Text>
                  </View>
                  <View style={styles.View}>
                    <Text style={[styles.Text, { backgroundColor: 'white'}]} onPress={this.Two.bind(this, 'ViewW', 'React NativeView组件')}>4.React NativeView组件</Text>
                  </View>
                </View>
                {/*  */}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contend: {
        height: 50,
        // borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    View: {
        height: 50,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    Text: {
        color: 'black',
        fontWeight: 'bold',
    },
    icon:{
        width:20,
        height:20
    }
});