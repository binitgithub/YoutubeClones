import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'fb70b4d099mshcc696173728ac45p17bb12jsn8c290146412b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url) => {
 const {data} = await axios.get(`${BASE_URL}/${url}`, options)
 return data;
}