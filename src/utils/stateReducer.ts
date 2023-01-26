import { ADD_TO_BASKET } from "../typings/constants";
import { BasicAction, InitialStateI } from "../typings/reduxTypings";


const stateReducer = (state: InitialStateI, action: BasicAction): InitialStateI => {
    switch (action.type) {
      case ADD_TO_BASKET:
        return {
            ...state,
            basket: [...state.basket, action.item]
        }

      default:
        return state;
    }
}

export default stateReducer;