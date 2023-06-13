import * as view from './listingView'

export default function (state) {

    console.log("🚀 ~ file: listingController.js:5 ~ state.emitter.subscribe ~ state:", state)

    // рендинг контейнера для карточек
    view.render();

    // рендинг карточек
    state.objects.forEach(function (object) {
        view.renderCard(object);
    })

    // при событии "клик по кнопке"
    state.emitter.subscribe('event:render-listing', () => {

    });
}