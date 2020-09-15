import React, { Component } from 'react'
import "./Getgoods.css"
import Header from "../../components/Header"
import querystring from "querystring"
import { reqGetgoodsList } from "../../utils/request"
import Goodbox from "../../components/Goodbox"

export default class Getgoods extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        let search=this.props.location.search;
        let result=querystring.parse(search.slice(1))
        reqGetgoodsList(result).then(res => {
            this.setState({
                list: res.data.list
            })
        })
    }
    render() {
        const { list } = this.state
        return (
            <div>
                <Header title="电视" back></Header>
                {list.length > 0 ? <Goodbox goods={list}></Goodbox> : null}
            </div>
        )
    }
}
