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
    Dimensions,
    Modal,
} from 'react-native';
import { Card, Icon,  List } from 'antd-mobile';

import { NavigationActions } from 'react-navigation'// NavigationActions
import DrawPage from './DrawPage'

const Item = List.Item

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            selected: '',
        }
    }
    componentDidMount() {
        // console.log('1', this.props.navigation)
        // 获取页面参数
    }
    onSelect = (opt) => {
        console.log(opt.props.value)
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
      };
      handleVisibleChange = (visible) => {
        this.setState({
          visible,
        })
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
    show = () => {
        this.setState({
            visible: !this.state.visible,
        })
    }
    _onLayout = (e) =>{
        console.log(e)        
        }
    render() {
        return(
            <View style={styles.container}>
           {(this.state.visible) ? <Modal
                animationType={"none"}
                transparent={true}
                visible={this.state.visible}
                onRequestClose={() => {console.log(this.newMethod())}}
                >
                <TouchableOpacity onPress={()=>console.log(1235214522)}>
                <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.3)'}]}>
                    <View style={{width: 100, height: 100, backgroundColor: 'white', position: 'absolute' , top: 240 + 44, right: 0}}>

                    </View>
                </View>
                </TouchableOpacity>
                </Modal> : null}
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

               <View style={{ display: 'flex', flexDirection: 'row'}}>
                   <View style={{ flex: 1}}>
                   <Text style={[styles.Text, { backgroundColor: 'white'}]}>下拉气泡</Text>
                   </View>
                   <View style={{ flex: 1, alignItems: 'flex-end'}} onLayout={({nativeEvent:e})=>this._onLayout(e)}>
                       <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => this.show()}
                       >
                          <Icon type="ellipsis" />
                       
                       </TouchableOpacity>
            
                    </View>
                   </View>
                   <View><Text style={[styles.Text, { backgroundColor: 'white'}]}>这就是套路</Text></View>
                </ScrollView>
            </View>
            
            
        )
    }

    newMethod() {
        return 1232124512451245;
    }
}
const styles = StyleSheet.create({
    magrt: {
        padding: 0,
        margin: 0,
    },
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