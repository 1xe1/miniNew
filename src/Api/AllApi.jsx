import axios from "axios";

export const fetchAppleData = () => {
  return axios
    .get(
      "https://newsapi.org/v2/everything?q=apple&from=2023-11-12&to=2023-11-12&sortBy=popularity&apiKey=ab2e1341281f44b28825a84f4efb3603"
    )
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export const fetchTeslaData = () => {
  return axios
    .get(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-10-13&sortBy=publishedAt&apiKey=ab2e1341281f44b28825a84f4efb3603"
    )
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export const fetchbusinessUSData = () => {
    return axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ab2e1341281f44b28825a84f4efb3603"
      )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return [];
      });
  };
  
  

  export const fetchTechCrunchData = () => {
    return axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ab2e1341281f44b28825a84f4efb3603"
      )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return [];
      });
  };

  export const fetchWallStreetData = () => {
    return axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ab2e1341281f44b28825a84f4efb3603"
      )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return [];
      });
  };

