export default {
  getTemplate(movie) {
    return `
      <li class="favorites-list__item"">
        <a href="#${movie.id}" class="favorites-list__movie">${movie.name}</a>
        <button class="favorites-list__del" data-id="${movie.id}">X</button>
      </li>
    `;
  },
};
