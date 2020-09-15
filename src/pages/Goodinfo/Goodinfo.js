import React, { Component } from 'react'
import "./Goodinfo.css"
import Header from "../../components/Header"
import querystring from "querystring"
import { reqGoodsInfo } from "../../utils/request"
import likeImg from "../../assets/img/img/cart_on.png"
import Pop from './components/Pop'
import {filterPrice} from "../../filters/index"
export default class Goodinfo extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            isShow:false
        }
    }
    componentDidMount() {
        let search = this.props.location.search;
        let result = querystring.parse(search.slice(1))
        reqGoodsInfo(result).then(res => {
            this.setState({
                list: res.data.list[0]
            })
        })
    }
    changeIsshow(isShow){
        this.setState({
            isShow:isShow
        })
    }
    render() {
        const { list ,isShow} = this.state
        if (list&&this.refs.des) {
            this.refs.des.innerHTML =list.description
        }
        return (
            <div>

                
                <Header title="商品详情" back></Header>
                <div className="imgBox">
                    <img src={list.img} alt="" />
                </div>
                <div className="centerTop">
                    <div className="title">{list.goodsname}</div>
                    <div className="like">
                        <img src={likeImg} alt="" />
                        <p>收藏</p>
                    </div>
                </div>
                <div className="centerBottom">
                    <div className="price">
                        <p className="now_price">￥{filterPrice(list.price?list.price:0)}</p>
                        <p className="market_price">￥{filterPrice(list.market_price?list.market_price:0)}</p>
                    </div>
                    <div className="newHot">
                        {list.ishot === 1 ? <div className="hot">热卖</div> : null}
                        {list.isnew === 1 ? <div className="new">新品</div> : null}
                    </div>
                </div>
                <div  ref="des" className="goodsmore"></div>
                <div className="bottom">
                    <div className="btn" onClick={()=>this.changeIsshow(true)}>加入购物车</div>
                </div>
               { isShow?<Pop list={list} isShow={(isShow)=>this.changeIsshow(isShow)}></Pop>:null}
                
            </div>
        )
    }
}
