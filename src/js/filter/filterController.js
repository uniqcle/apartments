import Filter from './filterModel';
import * as view from './filterView';


export default function (state) {

    // создание объекта фильтра
    if (!state.filter) state.filter = new Filter();

    // получение параметров для фильтра
    state.filter.getParams();

    // view.render();

}