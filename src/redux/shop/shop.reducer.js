import MENU_DATA from './menu.data'

const INITIAL_STATE = {
    collections: MENU_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer