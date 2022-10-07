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
      return newState.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    case "sortDown": {
      const newState = [...state];
      return newState.sort((a, b) => (a.name > b.name ? -1 : 1));
    }
    case "check": {
      return state.filter(item=>item.age>18)
    }
    default:
      return state;
  }
};

export const sortUpAC = (up: string) => {
  return {
    type: "sort",
    payload: {
      up: up,
    },
  } as const;
};

export const sortDownAC = (down: string) => {
  return {
    type: "sortDown",
    payload: {
      down: down,
    },
  } as const;
};

export const sortForAgeAC = (age: string) => {
  return {
    type: "check",
    payload: {
      age: age,
    },
  } as const;
};
