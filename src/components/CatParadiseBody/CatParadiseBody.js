import React, { useState } from "react";
import CatCard from "./CatCard/CatCard";
import CatCountriesFilter from "./CatCountriesFilter/CatCountriesFilter";

const CatParadiseBody = (props) => {
  //state= {loadWithCountryFilterOut:{}}
  let [loadWithCountryFilterOut, setCountry] = useState({});

  function findTotalCountries() {
    let totalCountries = [{ country: "All", catBreeds: 67 }];
    props.catBreeds.forEach((cat) => {
      let addNewCountry = false;
      for (let index = 0; index < totalCountries.length; index++) {
        if (cat.origin === totalCountries[index].country) {
          addNewCountry = false;
          break;
        }
        addNewCountry = true;
      }

      if (addNewCountry === true)
        totalCountries.push({ country: cat.origin, catBreeds: 0 });
    });
    return totalCountries;
  }

  function ascendingNumberCatBreedsOfCountry() {
    const totalCountries = findTotalCountries();

    props.catBreeds.forEach((cat) => {
      for (let index = 0; index < totalCountries.length; index++) {
        if (cat.origin === totalCountries[index].country) {
          totalCountries[index].catBreeds = totalCountries[index].catBreeds + 1;
        }
      }
    });
    const ascendingNumberCatBreedsOfCountry = totalCountries.sort(
      (country1, country2) => {
        return country1.catBreeds - country2.catBreeds;
      }
    );
    return ascendingNumberCatBreedsOfCountry;
  }

  function catBreedsDataWithFilter() {
    const { catBreeds } = props;
    let catBreedsDataWithFilter = [];
    if (
      loadWithCountryFilterOut.country === undefined ||
      loadWithCountryFilterOut.country === "All"
    ) {
      catBreedsDataWithFilter = catBreeds;
    } else {
      catBreeds.forEach((cat) => {
        if (cat.origin === loadWithCountryFilterOut.country) {
          catBreedsDataWithFilter.push(cat);
        }
      });
    }

    return catBreedsDataWithFilter;
  }

  function getCatCardList() {
    const catBreeds = catBreedsDataWithFilter();

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
  // handle onclick event props "loadCatCardWithFilter"
  function loadCatCardWithFilter(key) {
    setCountry((loadWithCountryFilterOut = { country: key })); // setState() for loadWithCountryFilterOut state
  }
  return (
    <div className="cart-cards">
      <CatCountriesFilter
        listCountries={ascendingNumberCatBreedsOfCountry()}
        loadCatCardWithFilter={(country) => {
          loadCatCardWithFilter(country);
        }}
      ></CatCountriesFilter>
      {getCatCardList()}
    </div>
  );
};

export default CatParadiseBody;
