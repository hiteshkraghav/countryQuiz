import React from "react";

function DisplayCountryPair({ countries, pairMap }) {
  const [newCountries, setNewCountries] = React.useState(countries);

  let selectedCountry = React.useRef(null);
  let selectedCountry2 = React.useRef(null);

  let aMismatch = React.useRef(false);

  const changeColorAndMatchEntries = (selectedEvent) => {
    const { target } = selectedEvent;
    if (selectedCountry.current == null || aMismatch.current) {
      if (aMismatch.current) {
        selectedCountry.current.style.backgroundColor = "#22d560";
        selectedCountry2.current.style.backgroundColor = "#22d560";
      }
      target.style.backgroundColor = "#0000ff";
      selectedCountry.current = target;
      selectedCountry2.current = null;
      aMismatch.current = false;
    } else {
      if (pairMap.get(target.value) === selectedCountry.current.value) {
        let copyCount = JSON.parse(JSON.stringify(newCountries));
        delete copyCount[target.value];
        delete copyCount[selectedCountry.current.value];
        setNewCountries(copyCount);
        selectedCountry.current = null;
      } else {
        target.style.backgroundColor = "#ff0000";
        selectedCountry.current.style.backgroundColor = "#ff0000";
        selectedCountry2.current = target;
        aMismatch.current = true;
      }
    }
  };

  const DisplayNames = ({ names }) => {
    const btn = names.map((name) => (
      <button value={name} onClick={(e) => changeColorAndMatchEntries(e)}>
        {name}
      </button>
    ));
    return <div>{btn}</div>;
  };

  const toDisplay = [
    ...Object.keys(newCountries),
    ...Object.values(newCountries),
  ];

  if (toDisplay.length > 0)
    return (
      <>
        <DisplayNames names={toDisplay} />
      </>
    );
  return <>Congratulations..!</>;
}

export default DisplayCountryPair;
