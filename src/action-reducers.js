import { combineReducers }  from 'redux'


const NAP = 'napping';
const EAT = 'eating';
const PLAY = 'playing'


const initialState = {
    activity: 'napping'
}
// Actions plus Action Creators

const ACTION_NAP = NAP;
const ACTION_EAT = EAT;
const ACTION_PLAY = PLAY;



export function setActivityNap(id){
    return {
        type: ACTION_NAP,
    };
}


export function setActivityEat(id){
    return {
        type: ACTION_EAT,
    };
}


export function setActivityPlay(id){
    return{
        type: ACTION_PLAY,
    };
}


// window.setActivityNap = setActivityNap;
// window.setActivityEat = setActivityEat;
// window.setActivityPlay = setActivityPlay;


// re-duce, re-use, re-die

function activity(state = initialState.activity, action ={type:""}) {
    switch (action.type) {
        case ACTION_NAP:
            return NAP;
        case ACTION_EAT:
            return EAT;
        case ACTION_PLAY:
            return PLAY;
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    activity: activity,
})