import { API_URL, TIMEOUT_SEC, NUMBER_OF_RANDOM_NUMBERS } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getRandomUniqueInt = function (max) {
  const uniqueNumbers = new Set();
  const count = NUMBER_OF_RANDOM_NUMBERS;

  while (uniqueNumbers.size < count) {
    const randomNum = Math.floor(Math.random() * (max + 1));
    uniqueNumbers.add(randomNum);
  }

  return Array.from(uniqueNumbers);
};

export const AJAX = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
