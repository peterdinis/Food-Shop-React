import { ADD_TO_BASKET } from "../typings/constants";
import { BasicAction, InitialStateI } from "../typings/reduxTypings";


const stateReducer = (state: InitialStateI, action: BasicAction) => {
    switch (action.type) {
      case ADD_TO_BASKET:
        return {

        }
    }
}

export default stateReducer;