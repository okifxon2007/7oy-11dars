const initial = {
    users: []
};

export function userReduser(state = initial, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case 'REMOVE':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        case 'EDIT':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id ? { ...user, ...action.payload.data } : user
                )
            };
        default:
            return state;
    }
}
