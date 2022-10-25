 export type StateType = {
  loading: boolean;
};
type LoadingACType = {
  type: "ISLOADING";
};

const initState = {
  loading:false,
};

export const loadingReducer = (state = initState, action: LoadingACType): StateType => {
  // fix any
  switch (action.type) {
    case "ISLOADING": {
      return { ...state, loading: !state.loading };
    }
    default:
      return state;
  }
};

export const loadingAC = (): LoadingACType =>
  ({
    type: "ISLOADING",
  } as const); // fix any


