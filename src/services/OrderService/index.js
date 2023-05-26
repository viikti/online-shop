import { mainApi } from "../../config/mainApi";

class OrderService {
  static instance = new OrderService();

  #BASE_URL = "/order";

  getOrders() {
    return mainApi.get(this.#BASE_URL);
  }

  addOrder(newOrder) {
    return mainApi.post(this.#BASE_URL, newOrder);
  }
}

export default OrderService.instance;
