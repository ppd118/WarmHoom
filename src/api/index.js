import axios from "../utils/request";

// 路径地址
const base = {
    baseUrl: "http://localhost:5566",
    homehot1: "/api/home/hot1",
    homehot2: "/api/home/hot2",
    cityData: "/api/aj/getcitycode",
    search: "/api/search",
    details: "/api/details",
    login: "/api/login"
}

//请求方法
const api = {
    // 获取首页热门产品
    getHomeHot1(params) {
        return axios.get(base.baseUrl + base.homehot1, {
            params
        })
    },
    getHomeHot2(params) {
        return axios.get(base.baseUrl + base.homehot2, {
            params
        })
    },
    // 城市列表
    getCityData() {
        return axios.get(base.cityData)
    },
    // 搜索结果
    getSearchResult(params) {
        // console.log(params)
        return axios.get(base.baseUrl + base.search, {
            params
        })
    },

    // 详情页数据
    getDetails(params) {
        return axios.get(base.baseUrl + base.details, {
            params
        })
    },

    // 登录
    login(params) {
        // console.log(params)
        return axios.post(base.baseUrl + base.login, params)
    }

}
export default api;