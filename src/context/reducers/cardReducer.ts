import { ADD_TO_BASKET, REMOVE_ALL_ITEMS_FROM_BASKET, REMOVE_FROM_BASKET } from "../../typings/constants";
import { BasicAction, InitialStateI } from "../../typings/reduxTypings";

const stateReducer = (state: InitialStateI, action: BasicAction): InitialStateI => {
    console.log(action);
    switch (action.type) {
      case ADD_TO_BASKET:
        return {
            ...state,
            count: state.count + 1,
            basket: [...state.basket, action.item]
        }

      case REMOVE_FROM_BASKET:
        return {
          ...state,
          count: state.count - 1,
          basket: state.basket.filter(((item: any) => item.id !== action.id))
        }

      case REMOVE_ALL_ITEMS_FROM_BASKET:
        return {
          ...state,
          basket: []
        }

      default:
        return state;
    }
}

export default stateReducer;