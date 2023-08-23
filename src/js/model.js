import { AJAX, getRandomUniqueInt, fullName } from "./helpers.js";
import { API_URL, MATCHING_LIMITS } from "./config.js";

export const state = {
  countries: [],
  matching: [],
  score: [],
};

const createCountryObject = function (arrData) {
  return {
    name: arrData.name.common,
    image: arrData.flags.svg,
  };
};

export const loadCountryData = async function () {
  try {
    const data = await AJAX(`${API_URL}`);
    const uniqueIndices = getRandomUniqueInt(data.length);

    uniqueIndices.forEach((index) => {
      const countryData = data[index];
      const countryObject = createCountryObject(countryData);
      state.countries.push(countryObject);
    });

    // console.log(data[5]);
    // console.log(state.countries);
  } catch (err) {
    console.log(err);
  }
};

export const matchGame = function (countryName) {
  if (state.matching.includes(countryName)) {
    if (state.matching.length === 1) {
      removeDuplicates(countryName);
      console.log(state.matching);
      return;
    }
    if (state.matching.length === MATCHING_LIMITS) {
      state.matching.push(countryName);
      return;
    }
  }

  state.matching.push(countryName);
  matchDecision();

  // console.log(state.result);
  // console.log(state.matching);
};

const removeDuplicates = function (countryName) {
  // if (!state.matching.includes(countryName)) return;
  // if (state.matching.length === MATCHING_LIMITS) return;

  const indexToRemove = state.matching.indexOf(countryName);
  state.matching.splice(indexToRemove, 1);
};

const matchDecision = function () {
  let result = "";
  if (
    state.matching.length === MATCHING_LIMITS &&
    fullName(state.matching[0]) !== fullName(state.matching[1])
  ) {
    state.result = "loss";
  } else if (
    state.matching.length === MATCHING_LIMITS &&
    fullName(state.matching[0]) === fullName(state.matching[1])
  ) {
    state.result = "win";
  }

  return state.result;
};
