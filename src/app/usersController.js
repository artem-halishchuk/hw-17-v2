//let bodyParser = require('body-parser');
module.exports = (app, path) => {
    let jsonParser = bodyParser.json();
    let controller = new UsersController(path);
    //app.post('/users', jsonParser, controller.ex.bind(controller));
    app.get('/users', controller.getUsers.bind(controller));
}
class User {
    constructor(name) {
        this.name = name;
        this.notes = [];
    }
}
class UsersController{
    constructor(path) {
        this.path = path;
        this.users = [];
    }
    getUsers(request, response) {
        response.send([]);
    }
}
// let vasia = new User('vasia', 0);
// let petia = new User('petia55', 1);
// controller.users.push(vasia);
// controller.users.push(petia);
// console.log(controller.users);