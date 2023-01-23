import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const ApiData = async (url) => {
  const { data } = await axios.get((url), {
  });
    
  return data;
}