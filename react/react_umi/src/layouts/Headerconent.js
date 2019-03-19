import React, { Component } from "react"
export default class Headerconent extends Component{
    render() {
        const { pathname } = this.props
        return (
            <div>{pathname}</div>
        )
    }
}