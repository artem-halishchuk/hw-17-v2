import '../styles/main.css'; //импортим стили
import MenuMain from '../app/menuMain';

let users = [];


document.addEventListener('DOMContentLoaded', function() {
    let getBlockApp = document.querySelector('.app');
    let menuMain = new MenuMain(getBlockApp, users, '.menu-note', 'menu-main');

    // setTimeout(() => {
    //     let getUsers = fetch('/usersController', {
    //         method:'GET',
    //         headers: {
    //             'Content-Type':'application/json'
    //         },
    //     }).then(r => r.json()).then(r => {
    //         console.log(r);
    //         menuMain.show(r)
    //     });
    // }, 1000)
    // class User {
    //     constructor(name) {
    //         this.name = name;
    //         this.notes = [];
    //     }
    // }
    // let addUsers = fetch('/usersController', {
    //     method:'POST',
    //     headers: {
    //         'Content-Type':'application/json'
    //     },
    //     body: JSON.stringify(new User(this.name)),
    // }).then(r=>r.text()).then(console.log);


})


