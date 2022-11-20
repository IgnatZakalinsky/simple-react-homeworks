import { UserType } from "../HW8";

type tsarType = sortUpACType | sortDownACType | sortForAgeACType;

type sortUpACType = ReturnType<typeof sortUpAC>;
type sortDownACType = ReturnType<typeof sortDownAC>;
type sortForAgeACType = ReturnType<typeof sortForAgeAC>;

export const homeWorkReducer = (
  state: Array<UserType>,
  action: tsarType
): Array<UserType> => {
  switch (action.type) {
    case "sort": {
      const newState = [...state];
      return newState.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else return 0;
      });
    }
    case "sortDown": {
      const newState = [...state];
      return newState.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        } else return 0;
      });
    }
    case "check": {
      return state.filter((item) => item.age > action.payload.age);
    }
    default:
      return state;
  }
};

export const sortUpAC = () => {
  return {
    type: "sort",
    
  } as const;
};

export const sortDownAC = () => {
  return {
    type: "sortDown",
    
  } as const;
};

export const sortForAgeAC = (age: number) => {
  return {
    type: "check",
    payload: {
      age: age,
    },
  } as const;
};
