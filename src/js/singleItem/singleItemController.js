import SingleItem from './singleItemModel';
import * as view from './singleItemView';

export default async function (state) {
    // создаем объект singleItem
    state.singleItem = new SingleItem(state.routeParams);

    // получаем данные с сервера
    await state.singleItem.getItem();

    view.render(state.singleItem.objectItem);

    // запускаем прослушку событий
    // 1. Открытие модального окна
    document.querySelector('.button-order').addEventListener('click', function (e) {
        view.showModal();

    })

    // 2. Закрытие модального окна. Клик по close
    document.querySelector('.modal__close').addEventListener('click', function (e) {
        view.hideModal();

    })

    // 2. Закрытие модального окна. Клик по оverlay
    document.querySelector('.modal-wrapper').addEventListener('click', function (e) {
        if (e.target.closest('.modal')) {
            return null
        } else {
            view.hideModal();
        }
    })

    // Отправка формы. Модальное окно
    document.querySelector('.modal__form').addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = view.getInputModalForm();

        // Вызываем метод отправки данных и запись в объект singleItem
        await state.singleItem.submitForm(formData);

        console.log(state.singleItem.response)

        if (state.singleItem.response.message === "Bid Created") {
            alert('Ваша заявка успешно получена')
            view.hideModal();
            view.clearInput();

        } else if (state.singleItem.response.message === "Bid Not Created") {

            state.singleItem.response.errors.forEach(err => {
                alert(err)
            })
        }

    });


}