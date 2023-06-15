export default class Favourites {

    constructor() {
        this.favs = [];
        this.loadFromLocalStorage();

    }

    addFav(id) {
        this.favs.push(id);
        this.saveToLocalStorage()
    }

    removeFav(id) {
        const index = this.favs.indexOf(id);
        this.favs.splice(index, 1)
        this.saveToLocalStorage()
    }

    // проверяем 
    isFav(id) {
        return this.favs.indexOf(id) !== -1 ? true : false
    }

    // проверяет есть ли объект в избранном
    // если нет - добавляет, если есть - убирает
    toggleFav(id) {
        this.isFav(id) ? this.removeFav(id) : this.addFav(id)
    }

    saveToLocalStorage() {
        localStorage.setItem('favs', JSON.stringify(this.favs))
    }

    loadFromLocalStorage() {
        const storage = JSON.parse(localStorage.getItem('favs'));

        if (storage) {
            this.favs = storage
        }
    }




}