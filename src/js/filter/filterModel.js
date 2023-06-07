export default class Filter {
    constructor() {

    }

    // получаем необходимые значения для фильтра API
    async getParams() {
        try {
            const queryString = 'https://jsproject.webcademy.ru/itemsinfo';

            const response = await fetch(queryString);
            const data = await response.json();
            this.params = await data;

        } catch (error) {
            alert(error)
        }

    }
}