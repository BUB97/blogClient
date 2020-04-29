export default (state = {}, action) => {
    switch(action.type){
        case "updateUser":
            return action.user
        default:
            return state
    }
}