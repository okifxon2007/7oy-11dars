const initial = {
    users:[]
}
export function userReduser(state = initial, action){
    switch (action.type) {
        case 'ADD':
            return {...state, users:[...state.users, action.payload]}
            case'REMOVE':
            let copied = JSON.parse(JSON.stringify(state.users))
            copied = copied.filter(function(value){
                return value.id != action.payload
            })
            return {...state, users:copied}
            case'EDIT':

            break
        default:
            return state;
            break;
    }
}