import Filter from './filterModel';
import * as view from './filterView';


export default function () {

    const filter = new Filter();
    filter.getParams();

    console.log(filter)

    view.render();

}