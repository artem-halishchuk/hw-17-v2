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
        this.notes = [petia, petia2];
    }
    addUser(request, response) {
        let note = request.body;
        this.notes.push(note);
        response.send(this.notes);
    }
    getUsers(request, response) {
        response.send(this.notes);
    }
}
class Note {
    constructor(name, note, id) {
        this.name = name;
        this.note = note;
        this.id = id;
    }
}
let petia = new Note('petia', 'text 1');
let petia2 = new Note('petia2', 'text 2');
module.exports = usersController;