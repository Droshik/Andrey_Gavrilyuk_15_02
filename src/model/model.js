export default {
  movieList: null,
  favList: null,

  requestMovieList() {
    return fetch(
      "http://my-json-server.typicode.com/moviedb-tech/movies/list"
    ).then((response) => {
      if (!response.ok) {
        throw `${response.status} - ${response.statusText}`;
      }

      return response.json();
    });
  },

  requestSpecificMovie(id) {
    return fetch(
      `http://my-json-server.typicode.com/moviedb-tech/movies/list/${id}`
    ).then((response) => {
      if (!response.ok) {
        throw `${response.status} - ${response.statusText}`;
      }

      return response.json();
    });
  },
};
