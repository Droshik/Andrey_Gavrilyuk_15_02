export default {
  getTemplate(movie, active = false) {
    const genres = movie.genres.map((genre) => {
      return `
        <div class="modal__genre">${genre}</div>
      `;
    });

    const starring = movie.starring.map((star) => {
      return star;
    });

    const isActive = active ? "star--is-active" : "";

    const star = `
        <svg class="star ${isActive}" xmlns="http://www.w3.org/2000/svg" width="13" height="12"  viewBox="0 0 13 12">
          <path d="M5.792.356a.515.515 0 0 1 .98 0l1.13 3.477a.515.515 0 0 0 .49.356h3.656c.499 0 .707.639.303.932l-2.958 2.15a.515.515 0 0 0-.187.575l1.13 3.477a.515.515 0 0 1-.793.576L6.585 9.75a.515.515 0 0 0-.606 0L3.022 11.9a.515.515 0 0 1-.793-.577l1.13-3.477a.515.515 0 0 0-.188-.576L.213 5.121a.515.515 0 0 1 .303-.932h3.656a.515.515 0 0 0 .49-.356L5.792.356z"/>
        </svg>
      `;

    return `
      <div class="modal">
        <div class="modal__content">
          <div class="modal__left">
            <img
                    class="modal__img"
                    src="${movie.img}"
                    alt="movie poster"
                    data-id="1"
            />
            <div class="modal__desc">
              <button class="star-button modal__star-button" data-id="${
                movie.id
              }">
                  ${star}
               </button>
              <span class="modal__year">${movie.year}</span>
              <div class="modal__genres">
                ${genres.join("")}
              </div>
            </div>
          </div>
          <div class="modal__right">
            <h2 class="modal__name">${movie.name}</h2>
            <div class="modal__movie-desc">${movie.description}</div>

            <div class="modal__peole">
              <span class="modal__director">Director: ${movie.director}</span>
              <span class="modal_starring">Starring: ${starring.join(
                ", "
              )}</span>
            </div>
          </div>
          <button class = "modal__close">X</button>
        </div>
      </div>
    `;
  },
};
