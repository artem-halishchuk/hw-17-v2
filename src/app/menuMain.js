export default class MenuMain {
    constructor(blockInsert, arrElem, removeBlock, container) {
        this.blockInsert = blockInsert;
        this.arrElem = arrElem;
        this.activeElement = null;
        this.ul = null;
        this.removeBlock = removeBlock;
        this.container = container;
        this.createMenu();
    };
    createMenu() {
        let container = document.createElement('div');
        container.classList.add(this.container);
        this.blockInsert.append(container);

        let formWrapper = document.createElement('div');
        formWrapper.classList.add('form');
        container.append(formWrapper);

        let massageDeactivate = document.createElement('p');
        massageDeactivate.classList.add('massageDeactivate');
        massageDeactivate.textContent = 'Клик по полю меню дективирует активный компонент';
        container.append(massageDeactivate);

        let input = document.createElement('input');
        input.placeholder = 'Имя заметки';
        input.classList.add('input', 'form-name');
        formWrapper.append(input);

        let buttonAdd = document.createElement('button');
        buttonAdd.classList.add('button', 'form-add');
        buttonAdd.innerHTML = 'add';
        formWrapper.append(buttonAdd);

        let inputText = document.createElement('textarea');
        inputText.placeholder = 'Текст заметки';
        inputText.classList.add('input', 'form-text');
        container.append(inputText);

        buttonAdd.addEventListener('click', () => {
            if(input.value.trim() === '') {
                alert('Заполните поле имени.');
                return;
            }
            this.name = input.value;
            this.text = inputText.value;
            this.createElem();

            input.value = '';
            inputText.value = '';
        });
        this.ul = document.createElement('ul');
        this.ul.classList.add('content-list');
        container.append(this.ul);
        fetch('/usersController', {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            },
        }).then(r => r.json()).then(r => this.show(r));
        this.deactivateElement();
    }
    createElem() {
        let newNote = new Note(this.name, this.text);
        console.log(JSON.stringify(newNote));
        fetch('/usersController', {
            method:'POST',
            headers: {
                'Content-Type':'application/json;charset=utf-8'
            },
            body: JSON.stringify(newNote),
        }).then(r=>r.json()).then(r => this.show(r));
    }
    show(arr) {
        this.ul.innerHTML = '';
        if (!arr) return;
        arr.map((e, i) => {
            if(!e) return
            let li = document.createElement('li');
            li.classList.add('content-item');
            this.ul.append(li);

            let buttonShow = document.createElement('button');
            buttonShow.classList.add('content-item-name');
            buttonShow.innerHTML = e.name;
            li.append(buttonShow);
            li.addEventListener('click', (event) => {
                if (event.target.matches('.content-item-name-active')) return;
                this.activeElem(event.target);
                if (e === this.activeElement) buttonShow.classList.add('content-item-name-active');
            })
            if (e === this.activeElement) buttonShow.classList.add('content-item-name-active');
            li.dataset.index = i;
        })
    }
    activeElem(event) {
        console.log(1);
        if(!event) return;
        console.log(2);
        fetch('/usersController', {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            },
        }).then(r => r.json()).then(r => {
            console.log(r);
            if(!r) return;
            this.index = event.parentNode.dataset.index;
            this.activeElement = r[this.index];

            this.ul.childNodes.forEach(e => {
                e.firstChild.classList.remove('content-item-name-active');
                if(e.dataset.index === this.index) e.firstChild.classList.add('content-item-name-active');
            });
            this.show(r);
            //this.show();//----------------------------
            this.display();
        });

    }
    deleteElem(event) {
        let index = event.target.parentNode.dataset.index;
        if (this.arrElem[index] === this.activeElement) this.activeElement = null;
        this.arrElem.splice(event.target.parentNode.dataset.index, 1);
        if (event.target.parentNode.firstChild.matches('.content-item-name-active')) {
            if (document.querySelector('.menu-note')) document.querySelector('.menu-note').style.display = 'none';
        }
    }
    display() {
        if ((!this.activeElement) && document.querySelector(this.removeBlock)) {
            document.querySelector(this.removeBlock).style.display = 'none';
        }
        let menuNote;
        if (this.activeElement) {
            if (document.querySelector(this.removeBlock)) {
                document.querySelector(this.removeBlock).remove();
            }
            console.log('create menu note');
            let getBlockApp = document.querySelector('.app');
            menuNote = new MenuNote(getBlockApp, this.index);
            menuNote.createMenu();
            //menuNote.display();
        }
    }
    deactivateElement() {
        let click = null;
        document.addEventListener('click', (event) => {
            click = event.target;
            if (!click.matches(`.${this.container}`)) return;
            this.activeElement = null;
            this.display();
            if (document.querySelector('body .menu-note')) {
                document.querySelector('.menu-note').style.display = 'none';
            }
        })
    }
}


class MenuNotes extends MenuMain {
    constructor(blockInsert, arrElem, removeBlock, container) {
        super(blockInsert, arrElem, removeBlock, container);
    }
    createElem() {
        this.arrElem.push(new Note(this.name));
    }
    display() {
        if ((!this.activeElement) && document.querySelector(this.removeBlock)) {
            document.querySelector(this.removeBlock).style.display = 'none';
        }
        //let menuNote;
        if (this.activeElement) {
            if (document.querySelector(this.removeBlock)) {
                document.querySelector(this.removeBlock).remove();
            }
            let menuNote = new MenuNote(getBlockApp, this.activeElement);
            menuNote.createMenu();
        }
    }
}

class MenuNote {
    constructor(blockInsert, index) {
        this.blockInsert = blockInsert;
        this.index = index;
    }
    createMenu() {
        let container = document.createElement('div');
        container.classList.add('menu-note');
        this.blockInsert.append(container);

        let input = document.createElement('input');
        input.classList.add('input', 'note-name');
        container.append(input);

        let textarea = document.createElement('textarea');
        textarea.classList.add('input', 'note-form');
        container.append(textarea);

        fetch('/usersController', {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            },
        }).then(r => r.json()).then(r => {
            input.value = r[this.index].name;
            textarea.textContent = r[this.index].note;
        })
    }
}
class Note {
    constructor(name, note, id) {
        this.name = name;
        this.note = note;
        this.id = id;
    }
}