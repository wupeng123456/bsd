import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView
} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
class MyDraw extends Component {
    render() {
        return (
            <View style={styles.container}>
              <View>
                <Text>我就问你怕不怕</Text>
              </View>
            </View>
        );
    }
}


module.exports = MyDraw;
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    container:{
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
    }
});