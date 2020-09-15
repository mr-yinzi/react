//index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./assets/css/reset.css"
import "./assets/js/rem"
import 'antd-mobile/dist/antd-mobile.css';
import { HashRouter } from "react-router-dom"

ReactDOM.render(
    <HashRouter>
        <App></App>
    </HashRouter>,
    document.getElementById("root")
)