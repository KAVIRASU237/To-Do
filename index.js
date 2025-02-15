document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const addButton = document.getElementById('add-button');
    const listContainer = document.getElementById('list-container');

    const addTask = () => {
        const taskText = inputBox.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteIcon.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(deleteIcon);
        listContainer.appendChild(listItem);

        inputBox.value = '';
    };

    addButton.addEventListener('click', addTask);

    inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    listContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
        }
    });
});
