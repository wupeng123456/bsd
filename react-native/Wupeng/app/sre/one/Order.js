/*
 * @Author: Wupeng
 * @Date: 2018-05-02 15:30:57 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-02 19:17:06
 * 伸缩项目的属性
 */
import React, { Component } from 'react'
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
} from 'react-native'

export default class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <ScrollView>
                    <Text>1.order</Text>
                    <Text style={{textIndent: 100}}>    定义项目的排列顺序，数值越小，排列越靠前，默认值为0，语法为：order：整数值</Text>
                    <View style={{ display: 'flex', height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={[styles.width, {backgroundColor: 'yellow', flexGrow: 1}]}><Text>1</Text></View>
                        <View style={[styles.width, {backgroundColor: 'red'}]}><Text>2</Text></View>
                        <View style={[styles.width, {backgroundColor: 'green'}]}><Text>3</Text></View>
                    </View>
                    <Text>2.flex-grow</Text>
                    <Text style={{textIndent: 100}}>    定义伸缩项目的放大比例，默认值为0，即表示如果存在剩余空间，也不放大，语法为：flex-grow：整数值</Text>
                    <View style={{ display: 'flex', height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={[styles.width, {backgroundColor: 'yellow', flexGrow: 1}]}><Text>1</Text></View>
                        <View style={[styles.width, {backgroundColor: 'red', flexGrow: 1}]}><Text>2</Text></View>
                        <View style={[styles.width, {backgroundColor: 'green', flexGrow: 1}]}><Text>3</Text></View>
                    </View>
                    <Text>3.flex-shrink</Text>
                    <Text style={{textIndent: 100}}>    定义伸缩项目的收缩能力，默认值为1 ，其语法为：flex-shrink:整数值</Text>
                    <View style={{ display: 'flex', height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={[styles.width, {backgroundColor: 'yellow', flexShrink: 1}]}><Text>1</Text></View>
                        <View style={[styles.width, {backgroundColor: 'red', flexShrink: 1}]}><Text>2</Text></View>
                        <View style={[styles.width, {backgroundColor: 'green', flexShrink: 1}]}><Text>3</Text></View>
                    </View>
                    <Text>4.flex-basis</Text>
                    <Text style={{textIndent: 100}}>    用来设置伸缩项目的基准值，剩余的空间按比率进行伸缩，其语法为：flex-basis:length | auto，默认值为auto</Text>
                    <View style={{ display: 'flex', height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={[styles.width, {backgroundColor: 'yellow', flexBasis: 100}]}><Text>1</Text></View>
                        <View style={[styles.width, {backgroundColor: 'red', flexBasis: 50}]}><Text>2</Text></View>
                        <View style={[styles.width, {backgroundColor: 'green', flexBasis: 10}]}><Text>3</Text></View>
                    </View>
                    <Text>5.flex</Text>
                    <Text style={{textIndent: 100}}>    是flex-grow flex-shrink flex-basis这三个属性的缩写，其语法为：flex:none | flex-grow flex-shrink flex-basis，其中第二个和第三个参数为可选参数，默认值为：0 1 auto</Text>
                    <View style={{ display: 'flex', height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={[styles.width, {backgroundColor: 'yellow'}]}><Text>1</Text></View>
                        <View style={[styles.width, {backgroundColor: 'red',}]}><Text>2</Text></View>
                        <View style={[styles.width, {backgroundColor: 'green'}]}><Text>3</Text></View>
                    </View>
                    <Text>6.align-self</Text>
                    <Text style={{textIndent: 100}}>    用来设置单独的伸缩项目在交叉轴上的对齐方式，会覆盖默认的对齐方式，其语法为：align-self:auto | flex-start | flex-end | center | baseline | stretch(伸缩项目在交叉轴方向占满伸缩容器，如果交叉轴为垂直方向的话，只有在不设置高度的情况下才能看到效果)</Text>
                    <View style={{ display: 'flex', height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={[styles.width, {backgroundColor: 'yellow', alignSelf: 'flex-start'}]}><Text>1</Text></View>
                        <View style={[styles.width, {backgroundColor: 'green', algnSelf: 'center'}]}><Text>3</Text></View>
                        <View style={[styles.width, {backgroundColor: 'red', alignSelf: 'flex-end'}]}><Text>2</Text></View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    width: {
        width: 50,
        height: 50,
    },
})
