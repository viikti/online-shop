import React from "react";
import PropTypes from "prop-types";
import UserImage from "../../../Static/icons/UserImage.png";

import styles from "./styles.module.scss";

const ProfileView = ({ usersProfile }) => {
  const userName = `${usersProfile.firstName} ${usersProfile.lastName}`;
  return (
    <div className={styles.wrapper}>
      <>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={UserImage} alt="user" />
        </div>

        <div className={styles.personalInfoContainer}>
          <h2 className={styles.title}>Personal Information</h2>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <p className={styles.field}>Name</p>
              <p className={styles.field}>Email</p>
              <p className={styles.field}>Gender</p>
              <p className={styles.field}>Telephone Number</p>
            </div>
            <div className={styles.info}>
              <p>{userName}</p>
              <p>{usersProfile.email}</p>
              <p>{usersProfile.gender}</p>
              <p>{usersProfile.phone}</p>
            </div>

            <h2 className={styles.subtitle}>Recent Order History</h2>
          </div>
        </div>
      </>
    </div>
  );
};

ProfileView.propTypes = {
  usersProfile: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

export default ProfileView;
