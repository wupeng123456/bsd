import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
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
        // console.log('this', this.props)
        // onPress={()=>{this.props.navigation.goBack()}}
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ display: 'flex', height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个row</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row-reverse'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个row-reverse</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 160, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个column</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 160, justifyContent: 'center', alignItems: 'center', flexDirection: 'column-reverse'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个column-reverse</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'nowrap'}}>
                        <View style={[styles.Width, {backgroundColor: 'red', width: 200,}]}><Text>flexWrap第一个nowrap</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow', width: 200,}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green', width: 200,}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 110, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <View style={[styles.Width, {backgroundColor: 'red', width: 200,}]}><Text>第一个wrap</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow', width: 200,}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green', width: 200,}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60,justifyContent: 'flex-start', flexDirection: 'row'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个row</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60,justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个row</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60,justifyContent: 'center', flexDirection: 'row'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个row</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60,justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个row</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60,justifyContent: 'space-around', flexDirection: 'row'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个row</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60, alignItems: 'flex-start', flexDirection: 'row'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>alignItems第一个row</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60,alignItems: 'center', flexDirection: 'row'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>alignItems第一个flex-start</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60,alignItems: 'baseline', flexDirection: 'row'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个row</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 60,alignItems: 'stretch', flexDirection: 'row'}}>
                        <View style={[styles.Width, {backgroundColor: 'red'}]}><Text>第一个stretch</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow'}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green'}]}><Text>第三个</Text></View>
                    </View>
                    {/* alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around"; */}
                    <View style={{ display: 'flex', height: 110,justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignContent: 'flex-start'}}>
                        <View style={[styles.Width, {backgroundColor: 'red', width: 200,}]}><Text>alignContent</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow', width: 200,}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green', width: 200,}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 110,justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignContent: 'flex-end'}}>
                        <View style={[styles.Width, {backgroundColor: 'red', width: 200,}]}><Text>alignContent</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow', width: 200,}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green', width: 200,}]}><Text>第三个</Text></View>
                    </View>
                    <View style={{ display: 'flex', height: 110,justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignContent: 'center'}}>
                        <View style={[styles.Width, {backgroundColor: 'red', width: 200,}]}><Text>alignContent</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'yellow', width: 200,}]}><Text>第二个</Text></View>
                        <View style={[styles.Width, {backgroundColor: 'green', width: 200,}]}><Text>第三个</Text></View>
                    </View>
                </ScrollView>
                {/*1.display
                    display:flex | inline-flex 
                    块级伸缩容器   行内级伸缩容器*/}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Width: {
        width: 50,
        height: 50,
    },
})