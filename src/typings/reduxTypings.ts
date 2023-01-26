export interface InitialStateI {
    basket: Array<[]>
}

export const initialState = {
    basket: [],
} as InitialStateI;

type AddToBasketAction = {
    item: [],
    type: string,
}

export type BasicAction = AddToBasketAction 