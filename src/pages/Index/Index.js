import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import "./Index.css"
import 'antd-mobile/dist/antd-mobile.css'
import Home from "../Home/Home"
import Order from "../Order/Order"
import Shopping from "../Shopping/Shopping"
import Mine from "../Mine/Mine"

import homeY from "../../assets/img/tab_home_hig.png"
import homeN from "../../assets/img/tab_home_nor.png"
import meY from "../../assets/img/tab_me_hig.png"
import meN from "../../assets/img/tab_me_nor.png"
import shoppingY from "../../assets/img/tab_shopping_hig.png"
import shoppingN from "../../assets/img/tab_shopping_nor.png"
import orderY from "../../assets/img/tab_menu_hig.png"
import orderN from "../../assets/img/tab_menu_nor.png"
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            navs: [
                {
                    name: "首页",
                    selected: homeY,
                    noSelected: homeN,
                    path: "/index/home"
                },
                {
                    name: "分类",
                    selected: orderY,
                    noSelected: orderN,
                    path: "/index/order"
                },
                {
                    name: "购物车",
                    selected: shoppingY,
                    noSelected: shoppingN,
                    path: "/index/shopping"
                },
                {
                    name: "我的",
                    selected: meY,
                    noSelected: meN,
                    path: "/index/mine"
                },
            ]
        }
    }
    render() {
        // console.log(this.props);
        return (
            <div className="index">
                {/* 二级路由出口 */}
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/order" component={Order}></Route>
                    <Route path="/index/shopping" component={Shopping}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>

                {/* 底部导航带icon */}
                <footer className="index-footer footer2">
                    {
                        this.state.navs.map(item => {
                            return (
                                <NavLink activeClassName="select" key={item.path} to={item.path}>
                                    <img src={this.props.location.pathname===item.path?item.selected:item.noSelected} alt="" />
                                    <div>{item.name}</div>
                                </NavLink>
                            )
                        })
                    }
                </footer>
            </div>
        )
    }
}
