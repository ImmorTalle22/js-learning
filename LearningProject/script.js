const form = document.querySelector('#habit-form');
let habitList = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const habitInput = document.querySelector('#habit-input').value.trim().toLowerCase();
    const isDuplicate = habitList.find(item => item.name.toLowerCase() === habitInput);
    if (!isDuplicate && habitInput){
        habitList.push({name: habitInput, count: 0});
        renderHabits();
    } else {
        console.log("Повторка");
    }
    form.reset();
})


function renderHabits() {
    const habitListEl = document.querySelector('#habit-list');
    habitListEl.innerHTML = '';
    habitList.forEach((habit, index) => {
        habitListEl.innerHTML += `
            <li data-index="${index}">
                <span>${habit.name} — <b>${habit.count}</b></span>
                <button class="done-button">Выполнено</button>
                <button class="delete-button">Удалить</button>
            </li>`;
    });
}

const habitListEl = document.querySelector('#habit-list');

habitListEl.addEventListener('click', function(event) {
    if (event.target.classList.contains('done-button')) {
        const index = event.target.closest('li').dataset.index;
        habitList[index].count++;
        renderHabits();
    }
    if (event.target.classList.contains('delete-button')) {
        const index = event.target.closest('li').dataset.index;
        habitList.splice(index, 1);
        renderHabits();
    }
})

