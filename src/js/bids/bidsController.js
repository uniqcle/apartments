import Bids from './bidsModal'
import * as view from './bidsView';

export default async function (state) {

    // создает объект модели для работы с заявками
    if (!state.bids) state.bids = new Bids();

    // получаем заявки с сервера
    await state.bids.getBids();

    // отображаем заявки
    view.render(state.bids.bids)
}