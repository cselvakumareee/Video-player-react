import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://video-player-react-b3378.firebaseio.com/'
});

export default instance;