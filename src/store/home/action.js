import * as home from './action-type';

/**
 * 点击+
 * @returns {{type: string}}
 */
export const clickAdd = () => {
    console.log(2)
    return {
        type:home.clickAdd
    }
};
/**
 * 点击-
 * @returns {{type: string}}
 */
export const clickRose = ()=>{
    console.log(1)
    return {
        type: home.clickRose
    }
};
/**
 * 重置
 * @returns {{type: string}}
 */
export const clickReSet = () =>{
    console.log(3)
    return {
        type:home.clcikReset
    }
}