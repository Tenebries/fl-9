const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

const ZERO = 0;

const createElement = (tag, className, text) => {
    let element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.innerText = text;
    }
    return element;
};

const container = createElement('div', 'container');
rootNode.appendChild(container);

const mainPage = () => {
    const title = createElement('h1', 'title', `My To-Do List`);
    const actionBar = createElement('div', 'action-bar');
    const addTaskInput = createElement('input', 'button');
    addTaskInput.setAttribute('type', 'button');
    addTaskInput.setAttribute('name', 'addTaskInput');
    addTaskInput.setAttribute('value', `Add task`);
    const toDoListHeader = createElement('div', 'to-do-list-header');
    const toDoListHeaderItems = createElement('span', 'to-do-list-header-items', `Items`);
    const itemsList = createElement('div', 'items-list');

    addTaskInput.onclick = () => {
        window.location.hash = '/add';
    };

    if (todoItems.length) {
        for (let key in todoItems) {
            if (todoItems.hasOwnProperty(key)) {
                const item = createElement('li', 'item');
                const checkMarkButton = createElement('button', 'check-mark-button');
                checkMarkButton.setAttribute('type', 'submit');
                const checkMarkIcon = createElement('img', 'check-mark-icon');
                checkMarkIcon.setAttribute('src', 'assets/img/todo-s.png');
                checkMarkIcon.setAttribute('alt', 'Check Mark');
                const taskDescription = createElement('p', 'task-description', todoItems[key].description);
                const deleteButton = createElement('button', 'delete-button');
                deleteButton.setAttribute('type', 'submit');
                const deleteIcon = createElement('img', 'delete-icon');
                deleteIcon.setAttribute('src', 'assets/img/remove-s.jpg');
                deleteIcon.setAttribute('alt', 'Delete');

                const changeBtn = createElement('button');
                const changeA = createElement('a');
                changeA.setAttribute('href', `#` + todoItems[key].id);

                checkMarkIcon.onclick = () => {
                    checkMarkIcon.setAttribute('src', 'assets/img/done-s.png');
                };

                taskDescription.onclick = () => {
                    taskDescription.textContent = todoItems[key].description + ` changed`;
                    window.location.assign(`#mod_` + todoItems[key].id);
                };

                checkMarkButton.appendChild(checkMarkIcon);
                // checkMarkButton.appendChild(label);
                deleteButton.appendChild(deleteIcon);
                item.appendChild(checkMarkButton);
                item.appendChild(taskDescription);
                item.appendChild(deleteButton);
                itemsList.appendChild(item);

                checkMarkButton.onclick = () => {
                    checkMarkIcon.textContent = 'done!';
                };

                deleteButton.onclick = () => {
                    item.remove();
                };
            }
        }

        container.appendChild(title);
        container.appendChild(actionBar);
        actionBar.appendChild(addTaskInput);

        container.appendChild(toDoListHeader);
        toDoListHeader.appendChild(toDoListHeaderItems);
        container.appendChild(itemsList);
    }
};

mainPage();

const change = (idItem) => {
    for (let key in todoItems) {
        if (todoItems.hasOwnProperty(key)) {
            const input = createElement('input');
            input.setAttribute('placeholder', todoItems[key].description);

            container.appendChild(input)
        }
    }
};

const clearPage = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

const add = (description) => {
    const id = +new Date();
    const item = {isDone: false, id, description};

    todoItems.push(item);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    return todoItems;
};

const newItemPage = () => {
    clearPage(container);

    container.setAttribute('class', 'new-item-container');
    const newItemInput = createElement('input', 'new-item-input');
    newItemInput.setAttribute('type', 'text');
    newItemInput.setAttribute('placeholder', `Add description`);
    const newItemButton = createElement('button', 'button', `Save changes`);
    newItemButton.setAttribute('type', 'button');
    newItemButton.setAttribute('disabled', '');
    const cancelButton = createElement('button', 'button', `Cancel`);
    cancelButton.setAttribute('type', 'button');

    container.appendChild(newItemInput);
    container.appendChild(newItemButton);
    container.appendChild(cancelButton);

    newItemInput.oninput = () => {
        if (newItemInput.value.length > ZERO) {
            newItemButton.removeAttribute('disabled');
        } else {
            newItemButton.setAttribute('disabled', '');
        }
    };

    newItemButton.onclick = () => {
        add(newItemInput.value);
        clearPage(container);
        mainPage();
    };

    cancelButton.onclick = () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        mainPage();
    };
};

const modifyItemPage = () => {
    clearPage(container);

    container.setAttribute('class', 'new-item-container');
    const newItemInput = createElement('input', 'new-item-input');
    newItemInput.setAttribute('type', 'text');
    newItemInput.setAttribute('placeholder', ``);
    const newItemButton = createElement('button', 'button', `Save changes`);
    newItemButton.setAttribute('type', 'button');
    newItemButton.setAttribute('disabled', '');
    const cancelButton = createElement('button', 'button', `Cancel`);
    cancelButton.setAttribute('type', 'button');

    container.appendChild(newItemInput);
    container.appendChild(newItemButton);
    container.appendChild(cancelButton);

    newItemInput.oninput = () => {
        if (newItemInput.value.length > ZERO) {
            newItemButton.removeAttribute('disabled');
        } else {
            newItemButton.setAttribute('disabled', '');
        }
    };

    newItemButton.onclick = () => {
        console.log(`hi`);
    };

    cancelButton.onclick = () => {
        clearPage(container);
        mainPage();
    };
};

for (let key in todoItems) {
    if (todoItems.hasOwnProperty(key)) {
        window.addEventListener('hashchange', () => {
                if (location.hash === `#/add`) {
                    console.log(`hash changed to add`);
                    newItemPage();
                    console.log(`#` + todoItems[key].id);
                } else if (location.hash === `#mod_` + todoItems[key].id) {
                    change(todoItems[key].id);
                    console.log(`hash changed to change`);
                }
            }
        )
    }
}