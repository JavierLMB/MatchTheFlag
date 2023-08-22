import { AJAX, getRandomUniqueInt, fullName } from "./helpers.js";
import { API_URL, MATCHING_LIMITS } from "./config.js";

export const state = {
  countries: [],
  matching: [],
};

const createCountryObject = function (arrData) {
  return {
    name: arrData.name.common,
    image: arrData.flags.svg,
  };
};

export const loadFlag = async function () {
  try {
    const data = await AJAX(`${API_URL}`);
    const uniqueIndices = getRandomUniqueInt(data.length);

    uniqueIndices.forEach((index) => {
      const countryData = data[index];
      const countryObject = createCountryObject(countryData);
      state.countries.push(countryObject);
    });

    console.log(data[5]);
    console.log(state.countries);
  } catch (err) {
    console.log(err);
  }
};

export const matchGame = function (countryName) {
  if (state.matching.includes(countryName)) {
    removeDuplicates(countryName);
    console.log(state.matching);
    return;
  }

  state.matching.push(countryName);

  if (
    state.matching.length === MATCHING_LIMITS &&
    fullName(state.matching[0]) === fullName(state.matching[1])
  )
    console.log("win");

  if (
    state.matching.length === MATCHING_LIMITS &&
    fullName(state.matching[0]) !== fullName(state.matching[1])
  )
    console.log("Lost");

  console.log(state.matching);
};

const removeDuplicates = function (countryName) {
  const indexToRemove = state.matching.indexOf(countryName);
  state.matching.splice(indexToRemove, 1);
};
