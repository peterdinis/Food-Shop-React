import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../typings/constants";
import { BasicAction, InitialStateI } from "../typings/reduxTypings";


const stateReducer = (state: InitialStateI, action: BasicAction): InitialStateI => {
    switch (action.type) {
      case ADD_TO_BASKET:
        return {
            ...state,
            basket: [...state.basket, action.item]
        }

      case REMOVE_FROM_BASKET:
        return {
          ...state,
          basket: state.basket.filter(((item: any) => item.id !== action.id))
        }

      default:
        return state;
    }
}

export default stateReducer;