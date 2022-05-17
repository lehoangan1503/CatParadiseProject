import { click } from "@testing-library/user-event/dist/click";
import "../../../styles/catCountriesFilter.scss";
const CatCountriesFilter = ({ listCountries, ...props }) => {
  //obj props country {country:"name",catBreeds:number}

  function loadCatCardWithFilter(event) {
    props.loadCatCardWithFilter(
      event.target.textContent.replace(/[(]\d+[)]/, "")
    );
  }

  function loadCountryWithNumberOfBreeds() {
    const listCountriesToRender = listCountries.map((country) => {
      if (country.country === "All") {
        return (
          <div key={country.country} className="country">
            <p
              onClick={(e) => {
                loadCatCardWithFilter(e);
              }}
            >
              {country.country}
            </p>
          </div>
        );
      }
      return (
        <div value={country.country} key={country.country} className="country">
          <p
            onClick={(e) => {
              loadCatCardWithFilter(e);
            }}
          >
            {country.country}({country.catBreeds})
          </p>
        </div>
      );
    });
    return listCountriesToRender;
  }

  return (
    <div className="catCountriesFilter-container">
      <div className="countries">{loadCountryWithNumberOfBreeds()}</div>
    </div>
  );
};

export default CatCountriesFilter;
