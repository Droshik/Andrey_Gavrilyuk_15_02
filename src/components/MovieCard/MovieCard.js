const star = `
  <svg class="star" xmlns="http://www.w3.org/2000/svg" width="49" height="36" fill="#EEEEEE" viewBox="0 0 13 12">
    <path class="star-ico" d="M5.792.356a.515.515 0 0 1 .98 0l1.13 3.477a.515.515 0 0 0 .49.356h3.656c.499 0 .707.639.303.932l-2.958 2.15a.515.515 0 0 0-.187.575l1.13 3.477a.515.515 0 0 1-.793.576L6.585 9.75a.515.515 0 0 0-.606 0L3.022 11.9a.515.515 0 0 1-.793-.577l1.13-3.477a.515.515 0 0 0-.188-.576L.213 5.121a.515.515 0 0 1 .303-.932h3.656a.515.515 0 0 0 .49-.356L5.792.356z"/>
  </svg>

`;
export default {
  template(cardData) {
    return `    
              <a
               class="movie-card movie-card--card"
               href="#${cardData.id}"
               data-id="${cardData.id}"
              >
              <img
                  src=${cardData.img}
                  class="movie-card__img"
                  alt="movie poster"
                />
                
                <div class="movie-card__desc">
                  <span class="movie-card__name">${cardData.name}</span>
                  <span class="movie-card__year">${cardData.year}</span>
                </div>
        
                <button class="star-button movie-card__star-button" data-id="${cardData.id}">
                  ${star}
                </button>
              </a>
           `;
  },
};
