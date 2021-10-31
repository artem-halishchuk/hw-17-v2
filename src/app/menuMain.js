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
        input.placeholder = 'Имя пользователя';
        input.classList.add('input', 'form-name');
        formWrapper.append(input);

        let buttonAdd = document.createElement('button');
        buttonAdd.classList.add('button', 'form-add');
        buttonAdd.innerHTML = 'add';
        formWrapper.append(buttonAdd);
        buttonAdd.addEventListener('click', () => {
            if(input.value.trim() === '') {
                alert('Заполните поле имени.');
                return;
            }
            this.name = input.value;
            this.createElem();
            input.value = '';
            this.show(this.arrElem); //отображение созданого элемента
        });

        this.ul = document.createElement('ul');
        this.ul.classList.add('content-list');
        container.append(this.ul);
        this.show();
        this.deactivateElement();
    }
    createElem() {
        this.arrElem.push(new User(this.name, this.arrElem.length));
    }
    show() {
        this.ul.innerHTML = '';
        if (!this.arrElem) return;
        this.arrElem.map((e, i) => {
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

            let buttonDelete = document.createElement('button');
            buttonDelete.classList.add('delete');
            li.append(buttonDelete);
            buttonDelete.addEventListener('click', (event) => {
                event.stopPropagation();
                this.deleteElem(event);
                this.show();
                if(!event.target.parentNode.firstChild.matches('.content-item-name-active')) return;
                this.display();
            })
            li.dataset.index = i;
        })
    }
    activeElem(event) {
        if(!event) return;
        let index = event.parentNode.dataset.index;
        this.activeElement = this.arrElem[index];

        this.ul.childNodes.forEach(e => {
            e.firstChild.classList.remove('content-item-name-active');
            if(e.dataset.index === index) e.firstChild.classList.add('content-item-name-active');
        });
        this.show();
        this.display();
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
        let menuNotes;
        if (this.activeElement) {
            if (document.querySelector(this.removeBlock)) {
                document.querySelector(this.removeBlock).remove();
            }
            menuNotes = new MenuNotes(getBlockApp, this.activeElement.notes, '.menu-note', 'menu-notes');
            menuNotes.createMenu();
            menuNotes.display();
        }
    }
    deactivateElement() {
        let click = null;
        document.addEventListener('click', (event) => {
            click = event.target;
            if (!click.matches(`.${this.container}`)) return;
            this.activeElement = null;
            this.show();
            this.display();
            if (document.querySelector('body .menu-note')) {
                document.querySelector('.menu-note').style.display = 'none';
            }
        })
    }
}