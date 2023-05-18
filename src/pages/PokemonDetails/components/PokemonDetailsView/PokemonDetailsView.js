import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { lowerCase, upperCase } from "lodash";

import Spinner from "../../../../commonComponents/Spinner";

import styles from "./styles.module.scss";

import HP from "../../../../Static/icons/HP.png";
import ATTACK from "../../../../Static/icons/ATTACK.png";
import DEFENCE from "../../../../Static/icons/DEFENCE.png";
import SPECIAL_ATTACK from "../../../../Static/icons/SPECIAL_ATTACK.png";
import SPECIAL_DEFENCE from "../../../../Static/icons/SPECIAL_DEFENCE.png";
import SPEED from "../../../../Static/icons/SPEED.png";
import { startCase } from "lodash/string";
import Button from "@mui/material/Button";
import { ROUTE_NAMES } from "../../../../routes/RouteName";

const productStatsWithIcons = [
  HP,
  ATTACK,
  DEFENCE,
  SPECIAL_ATTACK,
  SPECIAL_DEFENCE,
  SPEED,
];

const PokemonDetailsView = ({
  pokemonDetails,
  isLoading,
  handleAddItemToCart,
}) => {
  const { id, name, image, price, abilities } = pokemonDetails;

  const pokemonStatsWithIcon = pokemonDetails.stats?.map((stat, index) => ({
    ...stat,
    icon: productStatsWithIcons[index],
  }));

  return (
    <>
      {isLoading ? (
        <Spinner color={`yellow`} />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={image} alt={name} />
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.name}> {startCase(name)}</div>
            <div className={styles.statsContainer}>
              <div className={styles.title}>Stats:</div>

              {pokemonStatsWithIcon?.map((stat) => (
                <div key={stat.title} className={styles.stats}>
                  <img height={20} src={stat.icon} alt="icon" />
                  <p className={styles.stat}>{stat.title}</p>
                  <p>-</p>
                  <p className={styles.stat}>{stat.value}</p>
                </div>
              ))}
            </div>

            <div className={styles.abilities}>
              <div className={styles.title}>Abilities:</div>
              {pokemonDetails.abilities?.map((ability) => (
                <div key={ability.title} className={styles.ability}>
                  <p style={{ width: "15%" }}>{startCase(ability.title)}</p>
                  <p>-</p>
                  <p style={{ width: "85%" }}>
                    {lowerCase(ability.description)}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.price}>
              <p>
                Price: <span>${price}</span>
              </p>
              <Button
                onClick={() =>
                  handleAddItemToCart({ id, name, image, price, quantity: 1 })
                }
                className={styles.button}
                variant="contained"
                size="medium"
                color="warning"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PokemonDetailsView.propTypes = {
  pokemonDetails: PropTypes.arrayOf({
    abilities: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.number,
      })
    ),
  }).isRequired,

  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.func,
};

PokemonDetailsView.defaultProps = {
  error: null,
};

export default PokemonDetailsView;
