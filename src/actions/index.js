export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEM_PLUS = "MEM_PLUS";
export const MEM_R = "MEM_R";
export const MEM_CLEAR = "MEM_CLEAR";

export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation = (operation) => {
    return ({ type: CHANGE_OPERATION, payload: operation })
}

export const clearDisplay = () => {
    return ({ type: CLEAR_DISPLAY })
}

export const memPlus = () => {
    return ({ type: MEM_PLUS })
}

export const memR = () => {
    return ({ type: MEM_R })
}

export const memClear = () => {
    return ({ type: MEM_CLEAR })
}