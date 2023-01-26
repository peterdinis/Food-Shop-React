export interface InitialStateI {
    basket: Array<[]>
}

type AddToBasketAction = {
    type: string,
    payload: any
}

export type BasicAction = AddToBasketAction | any;