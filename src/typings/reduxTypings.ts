export interface InitialStateI {
  basket: Array<[]>;
  count: number;
  quantity: number;
}

export const initialState = {
  basket: [],
  count: 0,
  quantity: 0,
} as InitialStateI;

type AddToBasketAction = {
  item: any;
  type: string;
};

type RemoveFromBasketAction = {
  item: any;
  type: string;
};

type RemoveAllItemsFromBasket = {
  type: string;
  item: [];
};

export type BasicAction =
  | AddToBasketAction
  | RemoveFromBasketAction
  | RemoveAllItemsFromBasket
  | any;
