import React, { Component } from 'react'
import "./Login.css"
import Header from "../../components/Header"
import { reqLogin } from "../../utils/request"
import { Toast } from 'antd-mobile'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            form: {
                phone: "",
                password: ""
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            form: {
                ...this.state.form,
                [key]: e.target.value
            }
        })
    }
    toIndex(form) {
        reqLogin(form).then(res => {
            if (res.data.code === 200) {
                Toast.success(res.data.msg, 1);
                //登录成功之后，设置一个标识
                sessionStorage.setItem("isLogin", 1)
                sessionStorage.setItem("uid", res.data.list.uid)
                sessionStorage.setItem("token", res.data.list.token)
                this.props.history.push("/index")
            }
            else{
                Toast.fail(res.data.msg, 1);
            }
        })
    }
    render() {
        const { form } = this.state
        const { phone, password } = form
        return (
            <div className="wrap">
                <Header title="登录" resect="注册"></Header>
                <div className="center">
                    <p>账号(手机号)：</p>
                    <p><input type="text" value={phone} onChange={(e) => this.changeUser(e, "phone")} /></p>
                    <p>密码：</p>
                    <p><input type="text" value={password} onChange={(e) => this.changeUser(e, "password")} /></p>
                    <p className="help">忘记密码</p>
                    <button onClick={() => this.toIndex(form)}> 登录 </button>
                </div>
            </div>
        )
    }
}
