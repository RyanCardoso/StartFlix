import axios from 'axios';

const ApiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=3c5f669cbaf7fa2be77278618ac19a5a"
})

export default ApiMovies;