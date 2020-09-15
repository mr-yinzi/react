import React, { Component } from 'react'
import "./Right.css"
import {Link} from "react-router-dom"
export default class Right extends Component {
    render() {
        let { secondCate } = this.props
        return (
            <div className="right">
                {
                    secondCate.map(item => {
                        return (
                          <Link  key={item.id} to={"/getgoods?fid="+item.id}>
                            <div className="box">
                                <img src={item.img} alt="" />
                                <p key={item.id} >{item.catename}</p>
                            </div>
                        </Link>
                        )
                    })
                }
            </div>
        )
    }
}

