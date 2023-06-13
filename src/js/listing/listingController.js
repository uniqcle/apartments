import * as view from './listingView'

export default function (state) {

    // рендинг контейнера для карточек
    view.render();

    // рендинг карточек
    state.objects.forEach(function (object) {
        view.renderCard(object);
    })

    // при событии "клик по кнопке"
    state.emitter.subscribe('event:render-listing', () => {
        // очищаем контейнер с карточками
        view.clearListingContainer();

        // рендер карточек
        state.objects.forEach(function (object) {
            view.renderCard(object);
        })
    });
}