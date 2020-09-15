import React, { Component } from 'react'
import "./Goodbox.css"
import {Link} from "react-router-dom"
import {filterPrice} from "../filters/index"
export default class Goodbox extends Component {
    render() {
        const { goods } = this.props
        return (
            <div>
                {
                    goods.map(item => {
                        return (
                            <Link  key={item.id} to={"/goodinfo?id="+item.id}>
                            <div className="good" >
                                <div className="goodLeft">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="goodRigtht">
                                    <p className="title">{item.goodsname}</p>
                                    <p className="price">￥{filterPrice(item.price)}</p>
                                    <button>立即抢购</button>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>

        )
    }
}
