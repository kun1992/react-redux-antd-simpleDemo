import * as home from './action-type';

export const initValue = (state = {count: 0}, action={}) => {
    const count = state.count;
    switch (action.type) {
        case home.clickAdd:
            return {count: count + 1}
        case home.clickRose:
            return {count: count - 1}
        case home.clcikReset:
            return {count: 0}
        default:
            return state
    }

}