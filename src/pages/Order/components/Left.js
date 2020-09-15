import React, { Component } from 'react'
import "./Left.css"
export default class Left extends Component {
    
    render() {
        let { firstCate,changeF} = this.props
        return (
            <div className="left">
                {
                    firstCate.map((item,index) => {
                        return <p key={item.id} onClick={() =>changeF(index)}>{item.catename}</p>
                    })
                }
            </div>
        )
    }

}
