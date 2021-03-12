const initialState = {
    isLoading: true,
    users: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_USERS':
            return {
                ...state,
                isLoading: payload.isLoading,
                users: payload.users,
            };
        default:
            return state;
    }
};
