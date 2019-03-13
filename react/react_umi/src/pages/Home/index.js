import React, { Component } from "react"
import { DatePicker } from 'antd';
import moment from "moment"
import { connect } from "dva"
@connect((state) => ({
    home: state.home
}))
export default class Home extends Component{

    render() {
        console.log(this.props)
        return(
            <div>
            </div>
        )
    }
}