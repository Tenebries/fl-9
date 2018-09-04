let rootNode = document.getElementById('root');

// Variables
const ZERO = 0;
const MAX_COUNT = 10;
let itemsCounter = 0;
let message = `Maximum item per list are created`;

function createElement(tag, className, text) {
    let element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

let container = createElement('div', 'container');
let header = createElement('header');
let title = createElement('h1', 'title', `TODO Cat List`);
let formAction = createElement('form', 'form-action');
let inputAction = createElement('input', 'input-action');
inputAction.setAttribute('type', 'text');
inputAction.setAttribute('name', 'input-action');
inputAction.setAttribute('oninput', 'changeButton()');
inputAction.setAttribute('placeholder', `Add New Action`);

let buttonAction = createElement('button', 'button-action');
buttonAction.setAttribute('type', 'button');
buttonAction.setAttribute('name', 'button-action');
buttonAction.setAttribute('onclick', 'createTask(inputAction.value)');
buttonAction.innerHTML = '<i class="material-icons md-inactive">add_box</i>'; // to edit

let main = createElement('main');
let list = createElement('ul', 'list');

let input = createElement('input');
input.setAttribute('type', 'checkbox');

// Add item
const createTask = inputText => {
    let task = createElement('li', 'task');
    task.setAttribute('draggable', 'true');
    let checkboxButton = createElement('button', 'button-checkbox');
    let checkboxIcon = createElement('i', 'material-icons', 'check_box_outline_blank');
    let deleteButton = createElement('button', 'button-delete');
    let deleteIcon = createElement('i', 'material-icons', 'delete');
    let text = createElement('span', 'text', inputText);

    checkboxButton.onclick = () => {
        checkboxIcon.textContent = 'check_box';
    };

    deleteButton.onclick = () => {
        task.remove();
        itemsCounter--;

        inputAction.disabled = false;
        // message.style.display = 'none';
    };

    if (++itemsCounter >= MAX_COUNT) {
        inputAction.disabled = true;
        // message.style.display = 'block';
    }

    inputAction.value = '';
    // buttonAction.disabled = true;

    list.appendChild(task);
    task.appendChild(checkboxButton);
    checkboxButton.appendChild(checkboxIcon);
    task.appendChild(deleteButton);
    deleteButton.appendChild(deleteIcon);
    checkboxButton.appendChild(text);
};

function changeButton() {
    if (inputAction.value.length > ZERO) {
        buttonAction.innerHTML = '<i class="material-icons">add_box</i>';
    } else {
        buttonAction.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
    }
}

let dragging = null;

list.addEventListener('dragstart', event => {
    dragging = event.target;
});

list.addEventListener('dragover', event => {
    if (event.target.className === 'task') {
        event.preventDefault();

        const ZERO_INDEX = 0, HALF = 2;

        const bounding = event.target.getBoundingClientRect();
        const offset = bounding.y + bounding.height / HALF;

        if (event.clientY - offset > ZERO_INDEX) {
            event.target.style['border-top'] = '';
            event.target.style['border-bottom'] = '2px dashed #ccc';
        } else {
            event.target.style['border-top'] = '2px dashed #ccc';
            event.target.style['border-bottom'] = '';
        }
    }
});

list.addEventListener('dragleave', event => {
    event.target.style['border-bottom'] = '';
    event.target.style['border-top'] = '';
});

list.addEventListener('drop', event => {
    if (event.target.className === 'task') {
        event.preventDefault();

        if (event.target.style['border-bottom']) {
            event.target.style['border-bottom'] = '';
            list.insertBefore(dragging, event.target.nextSibling);
        } else {
            event.target.style['border-top'] = '';
            list.insertBefore(dragging, event.target);
        }
    }
});

let footer = createElement('footer', 'footer');
let imageFooter = createElement('img');
imageFooter.setAttribute('src', 'assets/img/cat.png');
imageFooter.setAttribute('alt', 'Cat');

rootNode.appendChild(container);
container.appendChild(header);
header.appendChild(title);
header.appendChild(formAction);
formAction.appendChild(inputAction);
formAction.appendChild(buttonAction);
main.appendChild(list);
container.appendChild(main);
footer.appendChild(imageFooter);
container.appendChild(footer);
