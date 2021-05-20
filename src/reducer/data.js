import immutable,{ fromJS } from "immutable"
const defaultState = fromJS({
    city: "武汉",
    msg: 'Good Morning',
    users:{
        phone:"123123520520"
    },
    music: [],
})

export const data = (state = defaultState, action)=>{
    const { type, payload } = action;
    switch(type){
        case "changeCity":
            return state.set("city",payload)
            break;

        case "updateMsg":
            return state.update('msg',x=> x + '!' + action.payload);
            break;

        case "deletePhone":
            return state.deleteIn(['users','phone']);
            break;

        case "getMusicAsync":
            return state.set("music",payload);
            break;

        default:
            return state;
            break;
    }
}