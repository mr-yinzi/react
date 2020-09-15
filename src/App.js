import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Login from "./pages/Login/Login"
import Index from "./pages/Index/Index"
import Resect from "./pages/Resect/Resect"
import Getgoods from "./pages/Getgoods/Getgoods"
import Goodinfo from "./pages/Goodinfo/Goodinfo"
import MyRoute from "./pages/MyRoute/MyRoute"

export default function App() {
    return (
        <div>
            {/* Switch-路由出口 Route配置规则 Redirect-重定向 */}
            <Switch>
                <Route path="/login" component={Login}></Route>
                <MyRoute path="/index" component={Index}></MyRoute>
                <Route path="/resect" component={Resect}></Route>
                <MyRoute path="/getgoods" component={Getgoods}></MyRoute>
                <MyRoute path="/goodinfo" component={Goodinfo}></MyRoute>
                <Redirect to="/login"></Redirect>
            </Switch>
        </div>
    )
}
