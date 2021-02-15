import model from "../model/model";
import view from "../view/view";
import router from "./router";

export default {
  start() {
    view.renderMovList();
    view.renderFavList();
    view.initializeEvents();
    router.init();
  },

  ///FAVLIST
  getFavList() {
    if (model.favList === null) {
      if (window.localStorage.getItem("favList") !== null) {
        model.favList = JSON.parse(window.localStorage.getItem("favList"));
      } else {
        model.favList = [];
      }
    }

    return model.favList;
  },

  cacheList() {
    window.localStorage.setItem("favList", JSON.stringify(model.favList));
  },

  addToFavList(movieId) {
    if (!model.favList.includes(movieId)) {
      model.favList.push(movieId);
    }

    this.cacheList();
  },

  removeFromFavList(movieId) {
    const index = model.favList.indexOf(movieId);

    if (index > -1) {
      model.favList.splice(index, 1);
      this.cacheList();
    }
  },

  ////MOVLIST
  refreshStars() {
    document.querySelectorAll(".star-button").forEach((starBtn) => {
      if (model.favList.includes(starBtn.dataset.id)) {
        starBtn.querySelector(".star").classList.add("star--is-active");
      } else {
        starBtn.querySelector(".star").classList.remove("star--is-active");
      }
    });
  },

  async getMoviesList() {
    if (model.movieList === null) {
      const moviesList = await model.requestMovieList();

      model.movieList = moviesList;

      return moviesList;
    } else {
      return model.movieList;
    }
  },

  //MODAL
  handleModal(id) {
    model.requestSpecificMovie(id).then((movie) => {
      let isActive = false;

      if (this.getFavList().includes(movie.id.toString())) {
        isActive = true;
      }

      view.renderModal(movie, isActive);
    });
  },
};
