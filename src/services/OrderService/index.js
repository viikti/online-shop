import { mainApi } from "../../config/mainApi";

const url = "/order";

class OrderService {
  static instance = new OrderService();

  getOrders() {
    return mainApi.get(url);
  }

  addOrder(newOrder) {
    return mainApi.post(url, newOrder);
  }
}

export default OrderService.instance;
