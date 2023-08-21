import { AJAX, getRandomUniqueInt } from "./helpers.js";
import { API_URL } from "./config.js";

export const state = {
  countries: [],
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

loadFlag();
