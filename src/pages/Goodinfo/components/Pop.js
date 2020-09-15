import React, { Component } from 'react'
import "./Pop.css"
import { reqCartadd } from "../../../utils/request"
import { Toast } from 'antd-mobile'
export default class Pop extends Component {
    constructor() {
        super()
        this.state = {
            form: {
                uid: "",
                goodsid: "",
                num:1
            }
        }
    }
    goodsAdd(form){
        console.log(form);
        reqCartadd(form).then(res => {
            if (res.data.code === 200) {
                Toast.success(res.data.msg, 1);
                this.props.isShow(false)
            }
            else{
                Toast.fail(res.data.msg, 1);
            }
        })
    }
    render() {
        const { list, isShow } = this.props
        const { form } = this.state
               form.goodsid= list.id;
               form.uid =sessionStorage.getItem('uid')
        return (
            <div>
                <div className="black" >
                    <div className="blackTop" onClick={() => isShow(false)} ></div>
                    <div className="popBox">
                        <div className="boxTop">
                            <img src={list.img} alt="" />
                            <p>{list.goodsname}</p>
                        </div>
                        <div className="boxCenter">
                            <p>{list.specsname}</p>
                            {
                                list.specsattr ?
                                    JSON.parse(list.specsattr).map((item) => {
                                        return <div key={item} className="spec">{item}</div>
                                    }) : null
                            }
                        </div>
                        <div className="boxBttom" >
                            <span className="btn" onClick={() => this.goodsAdd(this.state.form)}>
                                加入购物车
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
