import React, { Component } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
class Header extends Component {
    goBack() {
        this.props.history.goBack()
    }
    render() {
        const { title, back, resect } = this.props
        return (
            <div className="wrap">
            <div className="header">
                <p>{title}</p>
                {
                    back? <p className="back" onClick={()=>this.goBack()}>返回</p>:null
                }
                {
                    resect? <Link to="/Resect" ><p className="resect"> {resect}</p></Link>:null
                }
            </div>
            </div>
        )
    }
}
export default withRouter(Header)
