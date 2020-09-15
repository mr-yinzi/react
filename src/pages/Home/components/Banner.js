import React, { Component } from 'react'
import "./Banner.css"
import {Carousel} from "antd-mobile"
export default class Banner extends Component {
    render() {
        const {banner}=this.props
        return (
            <div className="banner">
                <Carousel
                autoplay
                infinite
                >
                    {
                        banner.map(item=>{
                            return <img key={item.id} src={item.img} alt=""/>
                        })
                    }
                </Carousel>
            </div>
        )
    }
}
