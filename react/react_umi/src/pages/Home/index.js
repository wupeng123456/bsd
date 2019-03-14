import React, { Component } from "react"
import { DatePicker } from 'antd';
import moment from "moment"
import router from "umi/router"
import { connect } from "dva"
@connect((state) => ({
    home: state.home
}))
export default class Home extends Component{
    componentDidMount() {
        router.push("/Home")
        const { dispatch } = this.props
        dispatch({type: "home/fetch" })
    }
    
    render() {
        console.log(this.props)
        return(
            <div>
            </div>
        )
    }
}