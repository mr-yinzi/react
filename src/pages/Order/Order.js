import React, { Component } from 'react'
import Header from "../../components/Header"
import Left from "./components/Left"
import Right from "./components/Right"
import { reqCateList } from "../../utils/request"

export default class Order extends Component {
    constructor() {
        super()
        this.state = {
            firstCate: [],
            secondCate: [],
            index: 0,
        }
    }

    changeF(index) {
        let fir = this.state.firstCate[index].children;
        if (this.state.firstCate.length > 0) {
            this.setState({
                index: index,
                secondCate: fir
            })
        }

    }
    componentDidMount() {
        reqCateList().then(res => {
            this.setState({
                firstCate: res.data.list
            })
            if (this.state.firstCate.length > 0) {
                let fir = this.state.firstCate[0].children;
                this.setState({
                    secondCate: fir
                })
            }
        })
    }
    render() {
        const { firstCate, secondCate } = this.state
        return (
            <div>
                <Header title="分类"></Header>
                {firstCate.length > 0 ? <Left firstCate={firstCate} changeF={(index) => this.changeF(index)}></Left> : null}
                {secondCate.length > 0 ? <Right secondCate={secondCate} ></Right> : null}
            </div>
        )
    }
}
