import axios from "axios";
import { useEffect, useState } from "react";
import CatParadiseHeader from "../CatParadiseHeader/CatParadiseHeader";
import CatParadiseBody from "../CatParadiseBody/CatParadiseBody";
import Welcome from "../Welcome/Welcome";
const CatParadise = () => {
  const [catBreeds, updateData] = useState([]);
  const [welcomeTime, setWelcomeTime] = useState(true);
  useEffect(() => {
    getCatsDataFromApi();
  }, []);

  setTimeout(() => {
    setWelcomeTime(false);
  }, 9000);

  async function getCatsDataFromApi() {
    const URL_API = "https://api.thecatapi.com/v1/breeds";

    try {
      const response = await axios.get(URL_API);
      const catBreedData = response.data;

      updateData(catBreedData);
    } catch (error) {
      console.log(error);
    }
  }
  return welcomeTime ? (
    <Welcome></Welcome>
  ) : (
    <div className="cat-paradise-container">
      <CatParadiseHeader catBreeds={catBreeds}></CatParadiseHeader>
      <CatParadiseBody catBreeds={catBreeds}></CatParadiseBody>
    </div>
  );
};
export default CatParadise;
