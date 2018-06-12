import React from 'react'
import { connect } from 'dva'

@connect(({state, postDetail, loading}) => ({
    xinjian: state.xinjian,
    postDetail,
    loading: loading.models.postDetail,
}))
// (
//     ({ userDetail, loading }) => ({ userDetail, loading: loading.models.userDetail })
// )

export default class Xiangqing extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <div>123</div>
        )
    }
}