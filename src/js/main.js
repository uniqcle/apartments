import homePage from './pages/homePage'
import itemPage from './pages/itemPage'
import favouritesPage from './pages/favouritesPage'
import bidsPage from './pages/bidsPage'
import errorPage from './pages/errorPage'

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

function router() {
    //split path to array
    const pathArray = location.hash.split('/');

    //set current path
    let currentPath = pathArray[0] === '' ? '/' : pathArray[1];
    currentPath = currentPath === '' ? '/' : currentPath;

    // Chose matching Component from router or Error Page
    const { component = errorPage } = findComponentByPath(currentPath, routes) || {}

    component();
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router);
