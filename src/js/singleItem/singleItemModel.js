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

    async submitForm(formData) {
        try {
            const queryString = `https://jsproject.webcademy.ru/bidnew`;

            const response = await fetch(queryString, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            this.response = await data;

            

        } catch (e) {
            alert(e)
        }
    }
}