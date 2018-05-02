import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity
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
    one=() => {
        this.props.navigation.navigate('Zher', {
            title: '11111111111',
        },)
        //   NavigationActions.navigate({
    //     routeName: 'PurchaseIn',
    //     params: { title: '采购入库', rightClick: this.rightClick },
    //   })
    }
    render() {
        return(
            // <DrawPage/>
            <View style={styles.container}>
                <View style={styles.contend}>
                  <Text onPress={this.one.bind(this)}>1111111111</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    contend: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:20,
        height:20
    }
});