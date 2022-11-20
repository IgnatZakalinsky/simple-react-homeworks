const initState: InitialStateType = {theme:'dark'}
type InitialStateType = { theme: string }

type ActionType = ReturnType<typeof changeThemeAC>
export const themeReducer = (state = initState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                theme: action.payload.theme
            }
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: string) => {
    return {
        type: "CHANGE-THEME",
        payload: {
            theme: theme
        }
    } as const

};