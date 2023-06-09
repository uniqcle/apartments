import homePage from './pages/homePage'
import itemPage from './pages/itemPage'
import favouritesPage from './pages/favouritesPage'
import bidsPage from './pages/bidsPage'
import errorPage from './pages/errorPage'
import EventEmitter from './utils/EventEmitter';
import Favourites from './favourites/favouritesModel';

// routes 
const routes = [
    { path: '/', component: homePage },
    { path: 'item', component: itemPage },
    { path: 'favourites', component: favouritesPage },
    { path: 'bids', component: bidsPage }
]

function findComponentByPath(path, routes) {
    return routes.find(route => route.path === path)
}

const state = {
    objects: [],
    emitter: new EventEmitter(),
    favourites: new Favourites()
}

// тестирование. После удалить!
window.state = state;


function router() {
    //split path to array
    const pathArray = location.hash.split('/');

    //set current path
    let currentPath = pathArray[0] === '' ? '/' : pathArray[1];
    currentPath = currentPath === '' ? '/' : currentPath;

    //save route params
    state.routeParams = pathArray[2] ? pathArray[2] : '';

    // Chose matching Component from router or Error Page
    const { component = errorPage } = findComponentByPath(currentPath, routes) || {}

    component(state);
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router);
