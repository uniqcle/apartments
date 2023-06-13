export default class SingleItem {
    constructor(id) {
        this.id = id;
    }

    async getItem() {

        try {
            const queryString = `https://jsproject.webcademy.ru/items/${this.id}`

            const response = await fetch(queryString);
            const data = await response.json();
            this.objectItem = await data;

        } catch (e) {
            alert(e)
        }

    }
}