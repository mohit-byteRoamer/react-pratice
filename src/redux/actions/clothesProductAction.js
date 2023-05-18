import { ADD_PRODUCT_CLOTHES } from "../constant";

export const addClothesProduct = (data) => {
  return {
    type: ADD_PRODUCT_CLOTHES,
    data,
  };
};
