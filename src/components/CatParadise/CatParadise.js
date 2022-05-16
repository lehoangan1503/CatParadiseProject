import axios from "axios";
import { useEffect, useState } from "react";
import CatParadiseHeader from "../CatParadiseHeader/CatParadiseHeader";
import CatParadiseBody from "../CatParadiseBody/CaParadiseBody";

const CatParadise = () => {
  let [catBreeds, updateData] = useState([]);
  useEffect(() => {
    getCatsDataFromApi();
  }, []);
  async function getCatsDataFromApi() {
    const URL_API = "https://api.thecatapi.com/v1/breeds";

    try {
      const response = await axios.get(URL_API);
      const catBreedData = response.data;
      updateData((catBreeds = catBreedData));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="cat-paradise-container">
      <CatParadiseHeader catBreeds={catBreeds}></CatParadiseHeader>
      <CatParadiseBody catBreeds={catBreeds}></CatParadiseBody>
    </div>
  );
};
export default CatParadise;
