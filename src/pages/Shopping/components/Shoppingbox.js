import React, { Component } from 'react'
import "./Shoppingbox.css"
import store from "../../../assets/img/store.png"
import radio_nor from "../../../assets/img/radio_nor.png"
import radio_hig from "../../../assets/img/radio_hig.png"
import {filterPrice} from "../../../filters/index"
export default class Shoppingbox extends Component {
    render() {
        const { carList,changeOne,allEdit,delClick,sub,add } = this.props
        return (
            <div className="wrap">
                {
                    carList.map((item,index) => {
                        return (
                            <div className={allEdit?"shopp move":"shopp"}  key={item.id}>
                                <div className="shoppTop"><img src={store} alt="" />杭州保税仓区</div>
                                <div className="shoppCenter">
                                    <div className="imgbox"  onClick={() => changeOne(index)}>
                                    {
                                        item.checked ?  <img src={radio_hig} className="radioImg" alt=""  /> :
                                        <img src={radio_nor} className="radioImg" alt=""  />
                                    }
                                    </div>
                                    <img src={item.img} className="goodImg" alt="" />
                                    <div className="centerText">
                                        <p>{item.goodsname}</p>
                                        <div className="num">
                                            <span className="btn" onClick={()=>sub(item.id,item.num)}>-</span>
                                            <span className="ipt">{item.num}</span>
                                            <span className="btn" onClick={()=>add(item.id)}>+</span>
                                        </div>
                                        <p>总价：￥{filterPrice(item.price*item.num)}</p>
                                    </div>
                                    <div className="centerPrice">￥{filterPrice(item.price)}</div>
                                    <div className="del"  onClick={()=>delClick(item.id)}>删除</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
