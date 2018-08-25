/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-08-04 21:45:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-08-25 12:04:26
 * Symbol作用 
 */
import React, { Component } from 'react'

export default class Symbol extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        const list = [1,2,3,1,2,3]
        console.log(list)
        let arr = new Set(list)
        console.info('list', arr)
        return(
            <section>section</section>
        )
    }
}
