import { Component } from "react";
import "../../styles/CatParadiseHeader.scss";

class CatParadiseHeader extends Component {
  getOneCatAverageWeight(index) {
    let catObj = this.props.catBreeds[index];

    const arrayOfWeight = catObj.weight.metric.split(" - "); // change weight data format from "1 - 2" to arr["1","2"];

    let averageWeight = (arrayOfWeight[0] * 1 + arrayOfWeight[1] * 1) / 2;

    return averageWeight;
  }
  averageWeight() {
    const averageWeightOfEachCatArray = this.props.catBreeds.map(
      (cat, index) => {
        return this.getOneCatAverageWeight(index);
      }
    );

    let totalWeightOfAllCats = 0;
    averageWeightOfEachCatArray.forEach((weight) => {
      totalWeightOfAllCats = totalWeightOfAllCats + weight;
    });

    let averageWeightOfAllCats =
      totalWeightOfAllCats / averageWeightOfEachCatArray.length;
    return averageWeightOfAllCats;
  }

  getOneCatAverageLongevity(index) {
    let catObj = this.props.catBreeds[index];

    const arrayOfLongevity = catObj.life_span.split(" - "); // change weight data format from "1 - 2" to arr["1","2"];

    let averageLongevity =
      (arrayOfLongevity[0] * 1 + arrayOfLongevity[1] * 1) / 2;

    return averageLongevity;
  }
  averageLongevity() {
    const averageLongevityOfEachCatArray = this.props.catBreeds.map(
      (cat, index) => {
        return this.getOneCatAverageLongevity(index);
      }
    );
    let totalLongevityOfAllCats = 0;
    averageLongevityOfEachCatArray.forEach((lifespan) => {
      totalLongevityOfAllCats = totalLongevityOfAllCats + lifespan;
    });

    let averageLongevityOfAllCats =
      totalLongevityOfAllCats / averageLongevityOfEachCatArray.length;
    return averageLongevityOfAllCats;
  }

  findCountryHaveHighestCatBreeds = () => {
    let countriesObjArr = this.ascendingNumberCatBreedsOfCountry();
    return countriesObjArr[countriesObjArr.length - 1].country;
  };
  render() {
    return (
      <div className="catParadiseHeader-container">
        <div className="project-title">
          <h1>30 Days Of React</h1>
        </div>
        <div className="commonCatInfor-container">
          <img
            src="https://www.30daysofreact.com/static/media/favicon.e3a42d29.ico"
            alt=""
          />
          <h2>Cats Paradise</h2>
          <p id="cat-breeds-quantity">
            There are <span>{this.props.catBreeds.length} </span>cat breeds{" "}
          </p>
          <p>
            On average a cat can weight about{" "}
            <span>{this.averageWeight().toFixed(2)} </span> Kg and live{" "}
            <span>{this.averageLongevity().toFixed(2)}</span> years.
          </p>
        </div>
      </div>
    );
  }
}

export default CatParadiseHeader;
