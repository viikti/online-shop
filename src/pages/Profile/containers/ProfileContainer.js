import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountProfileDataSelector } from "../../../selectors";
import ProfileView from "../components/ProfileView";
import { orderIsLoading, orderSelector } from "../../Cart/selectors";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../../routes/RouteName";
import { getOrdersThunk } from "../../Cart/Thunk";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersProfile = useSelector(accountProfileDataSelector);
  const orders = useSelector(orderSelector);
  const isLoading = useSelector(orderIsLoading);

  const handleNavigateOrderHistoryDetail = useCallback(
    (id) => {
      navigate(`${ROUTE_NAMES.PROFILE}/${id}`);
    },
    [navigate]
  );
  useEffect(() => {
    dispatch(getOrdersThunk());
  }, [dispatch]);

  return (
    <ProfileView
      usersProfile={usersProfile}
      orders={orders}
      isLoading={isLoading}
      onNavigateOrderHistoryDetail={handleNavigateOrderHistoryDetail}
    />
  );
};

export default ProfileContainer;
