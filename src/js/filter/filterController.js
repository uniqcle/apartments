import Filter from './filterModel';
import * as view from './filterView';


export default async function (state) {

    // создание объекта фильтра
    if (!state.filter) state.filter = new Filter();

    // получение параметров для фильтра
    await state.filter.getParams();

    //отрисовка фильтра
    view.render(state.filter.params);

    // получаем все объекты с сервера
    await state.filter.getObjects();
    // сохранили из state.filter.objects в state.objects
    state.objects = state.filter.objects;

    // Обновляем счетчик на кнопке "Показать объекты"
    view.changeButtonTextShowObjects(state.filter.objects.length);

    // прослушка изменений формы
    const filterForm = document.querySelector('#filter-form');


    // при изменениях данных формы
    filterForm.addEventListener('change', async function (e) {
        e.preventDefault();

        state.filter.query = view.getInput();

        // записали данные в state.filter.objects
        await state.filter.getObjects();

        // сохранили из state.filter.objects в state.objects
        state.objects = state.filter.objects

        view.changeButtonTextShowObjects(state.filter.objects.length);

        console.log(state.filter.objects)
    })


    // при сбросе формы
    filterForm.addEventListener('reset', async function () {

        state.filter.query = '';
        // получаем все объекты с сервера
        await state.filter.getObjects();
        // Обновляем счетчик на кнопке "Показать объекты"
        view.changeButtonTextShowObjects(state.filter.objects.length);

    })

    // при отправке формы
    filterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        state.emitter.emit('event:render-listing', {});
    })

}