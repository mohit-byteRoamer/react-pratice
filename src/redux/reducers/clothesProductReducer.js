import { ADD_PRODUCT_CLOTHES } from "../constant";
const clothesProductState = {
  clothesProduct: "",
};
const ClothesProductReducer = (state = clothesProductState, action) => {
  switch (action) {
    case action.ADD_PRODUCT_CLOTHES:
      return {
        ...state,
        clothesProduct: action.data,
      };
    default:
      return state;
  }
};

export default ClothesProductReducer;
