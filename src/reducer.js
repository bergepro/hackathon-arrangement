// Status før man logger inn
export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            // Hvis SET_USER er aktivert, lytt for bruker.
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;