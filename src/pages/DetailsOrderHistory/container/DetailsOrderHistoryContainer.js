import React, { useEffect } from "react";
import DetailsOrderHistoryView from "../components/DetailsOrderHistoryView/DetailsOrderHistoryView";

import {
  orderDetailsSelector,
  orderIsLoading,
  orderSelector,
} from "../../Cart/selectors";

import { getOrdersThunk } from "../../Cart/Thunk";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const DetailsOrderHistoryContainer = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const orders = useSelector(orderSelector);

  const orderItems = useSelector((state) => orderDetailsSelector(state, id));
  console.log(orderItems, `loo`);
  const isLoading = useSelector(orderIsLoading);

  useEffect(() => {
    if (!orders) {
      dispatch(getOrdersThunk());
    }
  }, [orders, dispatch]);

  return (
    <DetailsOrderHistoryView orderItems={orderItems} isLoading={isLoading} />
  );
};

export default DetailsOrderHistoryContainer;
