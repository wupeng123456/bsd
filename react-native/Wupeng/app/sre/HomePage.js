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
import { NavigationActions } from 'react-navigation'
import DrawPage from './DrawPage'
export default class HomePage extends Component {
    one=() => {
        this.props.navigation.navigate('Zher')
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