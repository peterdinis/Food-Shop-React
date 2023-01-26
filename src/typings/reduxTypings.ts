export interface InitialStateI {
    basket: Array<[]>,
    count: number
}

export const initialState = {
    basket: [],
    count: 0
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