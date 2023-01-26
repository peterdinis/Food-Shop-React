export interface InitialStateI {
    basket: Array<[]>
}

export const initialState = {
    basket: [],
} as InitialStateI;

type AddToBasketAction = {
    item: any,
    type: string,
}

type RemoveFromBasketAction = {
    item: any,
    type: string,
}

export type BasicAction = AddToBasketAction | RemoveFromBasketAction | any; 