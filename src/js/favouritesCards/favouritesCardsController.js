import FavoriteCards from './favouritesCardsModel'
import * as view from './favouritesCardsView';

export default async function (state) {
    const favsList = state.favourites.favs;

    const favouriteCards = new FavoriteCards(favsList)

    await favouriteCards.getFavs();

    view.render(favouriteCards.cards);


    // прослушка кликов на иконку "Добавить в избранное"
    function addToFavListeners() {

        // обработка прослушки клика при добавлении в избранное
        // при старте страницы
        Array.from(document.getElementsByClassName('card__like')).forEach((like) => {
            like.addEventListener('click', (e) => {
                e.preventDefault();
                // Находим текущий ID по кот. кликнули
                const currentID = e.target.closest('.card').dataset.id;

                // добавляем/убираем эл-т из избранного
                state.favourites.toggleFav(currentID);

                // получаем текущ. эл-т и находится ли он в избранном
                const elementIcon = e.target.closest('.card__like')
                const isFaved = state.favourites.isFav(currentID)

                // перерисовываем иконку
                view.toggleFavouriteIcon(elementIcon, isFaved);
            })
        })

    }

    addToFavListeners()
}