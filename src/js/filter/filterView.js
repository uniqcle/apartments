// URLSearch Params не во всех браузерах присутствует, подэтому подключаем
import 'url-search-params-polyfill';

const elements = {
    filterSelect: document.getElementsByClassName('filter__dropdown'),
    filterRooms: document.getElementsByClassName('rooms__checkbox'),
    filterFields: document.getElementsByClassName('range__input'),
    btnShow: document.getElementsByClassName('filter__show')
}

export function render(params) {

    let complexName = '';
    params.complexNames.forEach(name => {
        complexName += `<option value="${name}">ЖК ${name}</option>`
    })

    let rooms = '';
    params.roomValues.forEach(room => {
        rooms += `
        <input
            name="rooms"
            type="checkbox"
            id="rooms_${room}"
            class="rooms__checkbox"
            value="${room}"
        />
        <label for="rooms_${room}" class="rooms__btn">${room}</label>
        `
    })


    const markup = `
        <!-- Filter -->
        <form id="filter-form" method="GET" class="container p-0">
            <div class="heading-1">Выбор квартир:</div>
            <div class="filter">
                <div class="filter__col">
                    <div class="filter__label">Выбор проекта:</div>
                    <select name="complex" id="" class="filter__dropdown">
                        <option value="all">Все проекты</option>
                        ${complexName}
                    </select>
                </div>
                <div class="filter__col rooms">
                    <div class="filter__label">Комнат:</div>
                    <div class="rooms__wrapper">
                        ${rooms}
                    </div>
                </div>
                <div class="filter__col">
                    <div class="filter__label">Площадь:</div>
                    <div class="range__wrapper">
                        <label class="range">
                            <div for="" class="range__label">от</div>
                            <input
                                name="sqmin"
                                min="0"
                                type="number"
                                class="range__input"
                                placeholder="${params.squareMin}"
                                value="${params.squareMin}"
                            />
                            <div class="range__value">м2</div>
                        </label>
                        <label class="range">
                            <div for="" class="range__label">до</div>
                            <input
                                name="sqmax"
                                min="0"
                                type="number"
                                class="range__input"
                                placeholder="${params.squareMax}"
                                value="${params.squareMax}"
                            />
                            <div class="range__value">м2</div>
                        </label>
                    </div>
                </div>
                <div class="filter__col">
                    <div class="filter__label">Стоимость:</div>
                    <div class="range__wrapper">
                        <div class="range">
                            <label for="" class="range__label">от</label>
                            <input
                                type="number"
                                name="pricemin"
                                min="0"
                                class="range__input range__input--price"
                                placeholder="${params.priceMin}"
                                value="${params.priceMin}"
                            />
                            <div class="range__value">₽</div>
                        </div>
                        <div class="range">
                            <label for="" class="range__label">до</label>
                            <input
                                type="number"
                                name="pricemax"
                                min="0"
                                class="range__input range__input--price"
                                placeholder="${params.priceMax}"
                                value="${params.priceMax}"
                            />
                            <div class="range__value">₽</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="filter__buttons">
                <button class="filter__show">Показать объекты</button>
                <button class="filter__reset" type="reset">Сбросить фильтр</button>
            </div>
        </form>
        <!-- // Filter -->
    `;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup)
}

export function changeButtonTextShowObjects(count) {

    let message;

    if (count == 0) {
        message = 'Объекты не найдены';
        elements.btnShow[0].disabled = true;
    } else {
        message = `Показать ${count} объектов`;
        elements.btnShow[0].disabled = false;
    }

    elements.btnShow[0].innerText = message;

}

// получаем все данные из формы
export function getInput() {
    // URLSearchParams формируем сразу строчку для запроса
    // берем сразу данные из формы и формируем строчку
    const searchParams = new URLSearchParams();

    //searchParams.append(name, value)
    // console.log(searchParams.get(filterSelect.name))

    //1. Значение с select
    const filterSelect = elements.filterSelect[0];

    if (filterSelect.value !== 'all') {
        searchParams.append(
            filterSelect.name,
            filterSelect.value
        )
    }

    //2. Параметры комнат checkboxes
    const roomValues = [];

    Array.from(elements.filterRooms).forEach(room => {
        if (room.value !== '' && room.checked) {
            roomValues.push(room.value)
        }
    })

    const roomValuesString = roomValues.join(',')

    if (roomValuesString !== '') {
        searchParams.append('rooms', roomValuesString)
    }


    //3. Получение всех инпутов (площадь и цена)
    Array.from(elements.filterFields).forEach(input => {

        if (input.value !== '') {
            searchParams.append(input.name, input.value)
        }

    })

    const queryString = searchParams.toString();

    if (queryString) {
        return '?' + queryString
    } else {
        return ''
    }

}