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

    // Обновляем счетчик на кнопке "Показать объекты"
    view.changeButtonTextShowObjects(state.filter.objects.length);

    // прослушка изменений формы
    const filterForm = document.querySelector('#filter-form')
    filterForm.addEventListener('change', function (e) {
        e.preventDefault();

        state.filter.queryString = view.getInput();

        console.log(state.filter.queryString)
    })

}