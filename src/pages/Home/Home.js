import React, { Component } from 'react'
import Login from "../../assets/img/img/home/logo.jpg"
import Banner from "./components/Banner"
import "./Home.css"
import {reqBannerList,reqGoodsList}from "../../utils/request"
import Goodbox from "../../components/Goodbox"
export default class Home extends Component {
    constructor(){
        super()
        this.state={
            banner:[],
            goods:[]
        }
    }
     componentDidMount(){
        reqBannerList().then(res=>{
            this.setState({
                banner:res.data.list
            })
        })
        reqGoodsList().then(res=>{
            this.setState({
                goods:res.data.list[0].content
            }) 
        })
        
    }
    render() {
        const { banner ,goods} = this.state
        return (
            <div className="wrap">
                <header>
                    <img src={Login} alt="小U商城"/>
                    <div className="ipt" >
                        <input type="text" placeholder='寻找商品'/>
                    </div>
                </header>
                {banner.length > 0 ? <Banner banner={banner}></Banner> : null}
                <div className="nav">限时抢购</div>
                {goods.length > 0 ? <Goodbox goods={goods}></Goodbox> : null}
            </div>
        )
    }
}
