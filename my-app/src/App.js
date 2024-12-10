import axios from 'axios';

const API_KEY = 'AIzaSyBZ9-v4uf_BpxVvty0uolN7ohRpedhw9Vg'; 
const BASE_URL = 'https://www.googleapis.com/youtube/v3';


export const fetchVideos = async (query) => {
  try {
    const response = await axios.get(`${'https://www.googleapis.com/youtube/v3'}/search`, {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query, 
        key: API_KEY,
      },
    });
    return response.data.items; // Array of video objects
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};

// Fetch popular videos (e.g., on the home page)
export const fetchPopularVideos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 10,
        regionCode: 'US', // You can change the region
        key: API_KEY,
      },
    });
    return response.data.items; // Array of popular videos
  } catch (error) {
    console.error('Error fetching popular videos:', error);
    return [];
  }
};
