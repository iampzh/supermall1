import {request} from "./request"
export function getHomeBannerDate(){
    return request({
        url:"/home/banner"
    })
}
export function getHomeRecommands(){
    return request({
        url:"/home/recommands"
    })
}