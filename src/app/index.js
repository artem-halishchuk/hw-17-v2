import '../styles/main.css'; //импортим стили
import MenuMain from '../app/menuMain';

let users = [];

fetch('/usersController', {
    method:'GET',
    headers: {
        'Content-Type':'application/json'
    },
}).then(r=>r.json()).then(console.log);

document.addEventListener('DOMContentLoaded', function() {
    let getBlockApp = document.querySelector('.app');
    new MenuMain(getBlockApp, users, '.menu-notes', 'menu-main');
})


