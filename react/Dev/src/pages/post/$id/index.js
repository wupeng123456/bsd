import React from 'react'
import { connect } from 'dva'

@connect(state => ({
    xinjian: state.xinjian,
}))

export default class Xiangqing extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render () {
        console.log(this.props)
        return (
            <div>123</div>
        )
    }
}