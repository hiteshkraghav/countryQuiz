import React from "react";
import counties from './Countries'
import reorderCountries, {getMapPairs} from './util'
import DisplayCountryPair from './DisplayCountryPair'
function CountryQuiz() {
  return (
    <div className="App">
      <DisplayCountryPair pairMap={getMapPairs(counties)} countries={reorderCountries(counties)} />
    </div>
  );
}

export default CountryQuiz;
