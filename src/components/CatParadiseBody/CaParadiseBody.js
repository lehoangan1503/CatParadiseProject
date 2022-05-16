import React, { Fragment } from "react";
import CatCard from "./CatCard/CatCard";

const CatParadiseBody = (props) => {
  function getCatCardList() {
    const { catBreeds } = props;

    const catCardList = [];

    for (let index = 0; index < catBreeds.length; index++) {
      const {
        image,
        name,
        origin,
        temperament,
        life_span,
        weight,
        description,
      } = catBreeds[index];
      const cat = {
        image,
        name,
        origin,
        temperament,
        life_span,
        weight,
        description,
      };
      if (
        catBreeds[index].image !== undefined &&
        catBreeds[index].image.id !== undefined
      ) {
        catCardList.push(
          <CatCard key={catBreeds[index].image.id} cat={cat}></CatCard>
        );
      }
    }

    return catCardList;
  }
  return <div className="cart-cards">{getCatCardList()}</div>;
};

export default CatParadiseBody;
