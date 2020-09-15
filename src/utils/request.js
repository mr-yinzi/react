import axios from "axios"
import qs from "qs"

//请求拦截
axios.interceptors.request.use(config=>{
  config.headers.authorization=sessionStorage.getItem('token')
  return config;
})

axios.interceptors.response.use(res=>{
    console.group("=======请求地址："+res.config.url+"=============")
    console.log(res);
    console.groupEnd()
    if(res.data.msg==="登录已过期或访问权限受限"){
      alert("登录已过期或访问权限受限")
      //清空
      sessionStorage.setItem('token',null)
      sessionStorage.setItem('uid',null)
      //跳转到登录 
      // this.props.history.push("/index")
    }
    return res;
    
})

// 会员注册
export const reqRegister = (form) => {
    return axios({
      url: "/api/register",
      method: "post",
      data: qs.stringify(form)
    })
  }

// 会员登录
export const reqLogin = (form) => {
    return axios({
      url: "/api/login",
      method: "post",
      data: qs.stringify(form)
    })
  }
  

//获取轮播图信息
export const reqBannerList=()=>{
    return axios({
        url:"/api/getbanner",
        method:"get"
    })
}

//获取商品信息
export const reqGoodsList=()=>{
    return axios({
        url:"/api/getindexgoods",
        method:"get"
    })
}
// 获取分类树形结构
export const reqCateList=()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}

// 获取分类商品
export const reqGetgoodsList=(params)=>{
    return axios({
        url:"/api/getgoods",
        method:"get",
        params
    })
}

// 获取一个商品信息
export const reqGoodsInfo=(params)=>{
  return axios({
      url:"/api/getgoodsinfo",
      method:"get",
      params
  })
}

// 获取购物车列表
export const reqCartlist=(params)=>{
  return axios({
      url:"/api/cartlist",
      method:"get",
      params
  })
}

// 购物车添加
export const reqCartadd = (form) => {
    return axios({
      url: "/api/cartadd",
      method: "post",
      data: qs.stringify(form)
    })
  }

  // 购物车删除
export const reqCartdelete = (form) => {
    return axios({
      url: "/api/cartdelete",
      method: "post",
      data: qs.stringify(form)
    })
  }

  // 购物车修改
export const reqCartedit = (form) => {
    return axios({
      url: "/api/cartedit",
      method: "post",
      data: qs.stringify(form)
    })
  }