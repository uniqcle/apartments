import * as view from './listingView'

export default function (state) {

    // рендинг контейнера для карточек
    view.render();

    // рендинг карточек
    state.objects.forEach(function (object) {

        const isFaved = state.favourites.isFav(object.id);

        view.renderCard(object, isFaved);
    })

    addToFavListeners();

    // при событии "клик по кнопке"
    state.emitter.subscribe('event:render-listing', () => {
        // очищаем контейнер с карточками
        view.clearListingContainer();

        // рендер карточек
        state.objects.forEach(function (object) {
            const isFaved = state.favourites.isFav(object.id);
            view.renderCard(object, isFaved);
        })

        addToFavListeners();
    });

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



}