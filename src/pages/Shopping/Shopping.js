import React, { Component } from 'react'
import Header from "../../components/Header"
import Shoppingbox from "./components/Shoppingbox"
import { reqCartlist, reqCartdelete, reqCartedit } from "../../utils/request"
import "./Shopping.css"
import Footer from "./components/Footer"
import { Toast } from 'antd-mobile'
export default class Shopping extends Component {
    constructor() {
        super()
        this.state = {
            carList: [],
            allChecked: false,//全选
            allEdit: false,//全部编辑
            allPirce: 0
        }
       
    }
    componentDidMount() {
        reqCartlist({ uid: sessionStorage.getItem("uid") }).then(res => {
            this.setState({
                carList: res.data.list ? res.data.list : []
            })
            if (this.state.carList.length > 0) {
                this.state.carList.forEach(item => {
                    item.checked = false
                })
            }
        })
    }
    // 单选
    changeOne(index) {
        this.state.carList[index].checked = !this.state.carList[index].checked
        this.setState({
            ...this.state,
            carList: [...this.state.carList],
            allChecked: this.state.carList.every(item => item.checked)
        })
        if (this.state.carList.length > 0) {
            let sum = 0;
            this.state.carList.forEach(item => {
                if (item.checked) {
                    sum += item.price * item.num
                }
            })
            this.setState({
                allPirce:sum
            })
        }
    }
    // 全选
    changeAll() {
        this.setState({
            ...this.state,
            allChecked: !this.state.allChecked,
            carList: [...this.state.carList.map(item => {
                item.checked = !this.state.allChecked;
                return item;
            })]
        })
        if (this.state.carList.length > 0) {
            let sum = 0;
            this.state.carList.forEach(item => {
                if (item.checked) {
                    sum += item.price * item.num
                }
            })
            this.setState({
                allPirce:sum
            })
        }
    }
    // 编辑
    changeEdit() {
        this.setState({
            ...this.state,
            allEdit: !this.state.allEdit,
        })
    }
    // 删除
    delClick(id) {
        reqCartdelete({ id: id }).then(res => {
            Toast.success(res.data.msg, 1)
        })
        reqCartlist({ uid: sessionStorage.getItem("uid") }).then(res => {
            this.setState({
                carList: res.data.list ? res.data.list : [],
                allEdit: false,//全部编辑
            })
            if (this.state.carList.length > 0) {
                this.state.carList.forEach(item => {
                    item.checked = false
                })
            }
        })
        this.setState({
            allPirce:0
        })
    }
    // -
    sub(id, num) {
        if (num <= 1) {
            Toast.fail("宝贝不能再减少了")
        } else {
            reqCartedit({ id: id, type: 1 }).then(res => {
            })
            reqCartlist({ uid: sessionStorage.getItem("uid") }).then(res => {
                this.setState({
                    ...this.state,
                    carList: res.data.list ? res.data.list : []
                })
            })
        }
            this.setState({
                allPirce:0
            })
    }
    // +
    add(id) {
        reqCartedit({ id: id, type: 2 }).then(res => {
        })
        reqCartlist({ uid: sessionStorage.getItem("uid") }).then(res => {
            this.setState({
                ...this.state,
                carList: res.data.list ? res.data.list : []
            })
        })
            this.setState({
                allPirce:0
            })
    }
    render() {
        const { carList, allEdit, allChecked, allPirce } = this.state
        return (
            <div className="wrap">
                <Header title="购物车"></Header>
                <div className="goodBox">
                    {carList.length > 0? <Shoppingbox carList={carList}
                        changeOne={this.changeOne.bind(this)}
                        delClick={this.delClick.bind(this)}
                        allEdit={allEdit}
                        sub={this.sub.bind(this)}
                        add={this.add.bind(this)}
                    ></Shoppingbox> : null}
                </div>
                {carList.length > 0 ?
                    <Footer changeAll={() => this.changeAll()}
                        changeEdit={() => this.changeEdit()}
                        allChecked={allChecked}
                        allPirce={allPirce}
                        allEdit={allEdit}
                    >
                    </Footer> : null}
            </div>
        )
    }
}
