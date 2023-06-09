export default class Filter {
    constructor() {
        this.query = '';
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

    // получение всех объектов по api
    async getObjects() {

        try {
            const queryString = `https://jsproject.webcademy.ru/items${this.query}`;
            const response = await fetch(queryString);
            const data = await response.json();
            this.objects = await data;

        } catch (e) {
            alert(error)
        }
    }
}