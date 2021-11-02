let bodyParser = require('body-parser');
function usersController(app, path) {
    let jsonParser = bodyParser.json();
    console.log(path);
    let controller = new UsersController();
    app.get('/usersController', jsonParser, controller.getUsers.bind(controller));
    app.post('/usersController', jsonParser, controller.addUser.bind(controller));
}
class UsersController{
    constructor() {
        this.users = [];
    }
    addUser(request, response) {
        let user = request.body;
        console.log(user); //undefined ????????????
        this.users.push(user);
        response.send(this.users);
    }
    getUsers(request, response) {
        response.send(this.users);
    }
}
class User {
    constructor(name) {
        this.name = name;
        this.notes = [];
    }
}
let petia = new User('petia', 1);
module.exports = usersController;