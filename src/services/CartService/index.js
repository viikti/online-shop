import { mainApi } from "../../config/mainApi";

class CartService {
  static instance = new CartService();

  #BASE_URL = "/cart";

  getItems() {
    return mainApi.get(this.#BASE_URL);
  }
  addItem(item) {
    return mainApi.post(`${this.#BASE_URL}/item`, item);
  }
  deleteItem(id) {
    return mainApi.delete(`${this.#BASE_URL}/item/${id}`);
  }

  updateItem({ id, quantity }) {
    return mainApi.patch(`${this.#BASE_URL}/item`, { id, quantity });
  }
}

export default CartService.instance;
