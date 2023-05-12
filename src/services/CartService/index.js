import { mainApi } from "../../config/mainApi";

const BASE_URL = "/cart";
const ITEM_BASE_URL = `${BASE_URL}/item`;

class CartService {
  static instance = new CartService();

  getCartInfo() {
    return mainApi.get(BASE_URL);
  }

  addItem(itemToAdd) {
    return mainApi.post(ITEM_BASE_URL, itemToAdd);
  }

  deleteItem(id) {
    return mainApi.delete(`${ITEM_BASE_URL}/${id}`);
  }

  updateItem(payload) {
    return mainApi.patch(ITEM_BASE_URL, payload);
  }
}

export default CartService.instance;
