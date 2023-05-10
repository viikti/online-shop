import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const UserButton = () => {
  return (
    <Link to="/profile">
      <Avatar variant="soft" color={`info`} />
    </Link>
  );
};
UserButton.propTypes = {
  handleClick: PropTypes.func,
};
export default UserButton;
