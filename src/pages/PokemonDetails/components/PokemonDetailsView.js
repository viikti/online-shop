import React from "react";
import { useSelector } from "react-redux";

import { lowerCase, upperCase } from "lodash";

import Spinner from "../../../commonComponents/Spinner";
import PokemonStat from "../../Pokemons/components/PokemonStat";

import { pokemonsIdSelector } from "../../Pokemons/selectors";

import { pokemonsStats } from "../utils/pokemonStats";
import productStatsWithIcons from "../utils/productStatsWithIcons";

import styles from "./styles.module.scss";

const PokemonDetailsView = ({ pokemonDetails, stats }) => {
  const { name, image, price, abilities } = pokemonDetails;
  const isLoading = useSelector(pokemonsIdSelector.isLoading);

  return (
    <div>
      {isLoading ? (
        <Spinner color={"yellow"} />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <img className={styles.name} src={image} alt={name} />
          </div>
        </div>
      )}
    </div>
    // <div className={styles.wrapper}>
    //   <div>{isLoading && <Spinner color={"yellow"} />}</div>
    //   <div className={styles.detailsCard}>
    //     <div className={styles.detailsCardHeader}>
    //       <img src={image} alt={name} />
    //       <h3>{upperCase(name)}</h3>
    //     </div>
    //
    //     <div>
    //       <h4>Abilities</h4>
    //       <PokemonAbilities abilities={abilities} />
    //     </div>
    //   </div>
    //   <div>
    //     <h4>Stats</h4>
    //     <div className={styles.detailsStats}>
    //       {stats?.map(([statName, statValue]) => (
    //         <PokemonStat
    //           key={statName}
    //           srcImage={productStatsWithIcons[statName]}
    //           statName={pokemonsStats(lowerCase(statName))}
    //           statValue={statValue}
    //         />
    //       ))}
    //     </div>
    //     <div>
    //       <div className={styles.detailsPrice}>
    //         <p>
    //           Price: <span>${price}</span>
    //         </p>
    //         <Button variant="contained" color="success">
    //           Buy
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PokemonDetailsView;
