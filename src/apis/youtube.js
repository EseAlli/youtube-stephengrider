import axios from 'axios';
const KEY = 'AIzaSyDY_IRrrGFCiPeRnMZgwQ7Tr3gJjSsZXNk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
});