const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const priceInput = document.querySelector('#priceInput');
const list = document.querySelector('#list');

myButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li');
    //element.classList - добавляет или удаляет классы для елемента
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', () => {
        //parent.removeChild(element) - удаляет указанный элемент(element) из родителя (parent)
        list.removeChild(newItem)
    })
    //Зачеркивание элемента
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
    nameInput.value = '';
    newItem.addEventListener('click', (event) => {
        event.target.classList.toggle('checked'); // classList.toggle(); - добовляет класс на страницу, если его нет и удаляет, если он есть.
    });
})
