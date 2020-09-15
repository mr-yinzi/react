import React, { Component } from 'react'
import "./Resect.css"
import Header from "../../components/Header"
import {reqRegister}from "../../utils/request"
import { Toast } from 'antd-mobile'
export default class Resect extends Component {
    constructor(){
        super()
        this.state={
            form:{
                phone:"",
                nickname:"",
                password:""
            }
        }
    }
    changeUser(e,key){
        this.setState({
            form:{
                ...this.state.form,
                [key]:e.target.value
            }
        })
    }
    toLogin(form){
        reqRegister(form).then(res=>{
            if(res.data.code===200){
                Toast.success(res.data.msg, 1);
                this.props.history.push("/login")
            }
            else{
                Toast.fail(res.data.msg, 1);
            }
        })
    }
    render() {
        const { form} = this.state
        const { phone ,nickname,password} =form
        return (
            <div className="wrap">
                <Header title="注册" back="返回"></Header>
                <div className="center">
                    <p>手机</p>
                    <p><input type="text" value={phone} onChange={(e)=>this.changeUser(e,"phone")} /></p>
                    <p>昵称：</p>
                    <p><input type="text" value={nickname} onChange={(e)=>this.changeUser(e,"nickname")} /></p>
                    <p>密码：</p>
                    <p><input type="text" value={password} onChange={(e)=>this.changeUser(e,"password")} /></p>
                    <button onClick={()=>this.toLogin(form)}> 注册 </button>
                </div>
            </div>
        )
    }
}
