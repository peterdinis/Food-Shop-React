import { ADD_TO_BASKET, REMOVE_ALL_ITEMS_FROM_BASKET, REMOVE_FROM_BASKET } from "../../typings/constants";
import { IProduct } from "../../typings/productTypings";
import { BasicAction, InitialStateI } from "../../typings/reduxTypings";


export const getBasketTotal = (basket: any[]) => {
  basket?.reduce((amount: number, item: IProduct) =>item.price + amount, 0);
}


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
        const index = state.basket.findIndex((basketItem: any) => basketItem.id === action.id)
        let newBasket = [...state.basket]

        if(index >= 0) {
         newBasket.splice(index, 1);
        } else {
          console.warn("Can not remove product because is not in the basket");
        }
        return {
          ...state,
          basket: newBasket,
          count: state.count - 1,
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