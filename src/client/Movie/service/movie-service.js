import instance from "../../../shared/services/basic-http-service"

const API_KEY = "72b9442e19a2a38e518b31c4b7e30f13"

export const trendMovies = () => {
  return instance.get(`/3/trending/all/day?api_key=${API_KEY}`)
}

export const searchMovies = (query) => {
  return instance.get(
    `/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  )
}

export const getOneMovie = (id) => {
  return instance.get(`/3/movie/${id}?api_key=${API_KEY}`)
}

export const getMovieCast = (movieId) => {
  return instance.get(`/3/movie/${movieId}/credits?api_key=${API_KEY}`)
}

export const getMovieReviews = (movieId) => {
  return instance.get(`/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
}
