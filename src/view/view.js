import movieCard from "../components/MovieCard/MovieCard";
import ModalTemplate from "../components/Modal/Modal";
import favListTemplate from "../components/FavoritesList/FavoritesList";
import controller from "../controller/controller";

export default {
  renderMovList() {
    controller.getMoviesList().then((result) => {
      result.forEach((cardData) => {
        document
          .querySelector(".movies-list")
          .insertAdjacentHTML("beforeend", movieCard.template(cardData));
      });

      controller.refreshStars();
    });
  },

  async renderFavList() {
    const list = document.querySelector(".favorites-list");
    const favList = controller.getFavList();
    const moviesList = await controller.getMoviesList();

    list.innerHTML = "";

    favList.forEach((id) => {
      moviesList.forEach((movie) => {
        if (movie.id === +id) {
          list.insertAdjacentHTML(
            "beforeend",
            favListTemplate.getTemplate(movie)
          );
        }
      });
    });

    controller.refreshStars();
  },

  renderModal(movie, isActive) {
    document.body.insertAdjacentHTML(
      "beforeend",
      ModalTemplate.getTemplate(movie, isActive)
    );
  },

  initializeEvents: function () {
    document.addEventListener("click", (e) => {
      // todo: сделать как-то иначе
      // нажатие на звезду
      if (e.target.classList.contains("star-button")) {
        e.preventDefault();

        const movieId = e.target.dataset.id;
        const star = e.target.querySelector(".star");

        if (star.classList.contains("star--is-active")) {
          controller.removeFromFavList(movieId);
          this.renderFavList();
        } else {
          controller.addToFavList(movieId);
          this.renderFavList();
        }

        controller.refreshStars();
      }

      // нажатие на кнопку в списке
      if (e.target.classList.contains("favorites-list__del")) {
        controller.removeFromFavList(e.target.dataset.id);
        this.renderFavList();
        controller.refreshStars();
      }

      //закрыть модалку
      if (e.target.classList.contains("modal__close")) {
        document.querySelector(".modal").remove();
        window.location.hash = "";
      }

      //показать список

      if (e.target.classList.contains("favorites__btn")) {
        const sidebar = document.querySelector(".favorites");
        sidebar.classList.toggle("favorites--opened");
      }
    });
  },
};
