const form = document.querySelector('#habit-form');
let habitList = [];
const habitListEl = document.querySelector('#habit-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const habitInput = document.querySelector('#habit-input').value.trim().toLowerCase();
    const isDuplicate = habitList.find(item => item.name.toLowerCase() === habitInput);
    if (!isDuplicate && habitInput){
        habitList.push({name: habitInput, count: 0});
        setItemHabit();
        renderHabits();
    } else {
        console.log("Повторка");
    }
    form.reset();
})

function sortHabits() {
    habitList.sort((a, b) => b.count - a.count);
}

function renderHabits() {
    let html = '';    
    sortHabits();
    habitList.forEach((habit, index) => {
        html += `
                <li data-index="${index}">
                <span>${habit.name.charAt(0).toUpperCase() + habit.name.slice(1)} — <b>${habit.count}</b></span>
                <button class="done-button">Выполнено</button>
                <button class="delete-button">Удалить</button>
            </li>`;
    });
    habitListEl.innerHTML = html;
}

habitListEl.addEventListener('click', function(event) {
    if (event.target.classList.contains('done-button')) {
        const index = event.target.closest('li').dataset.index;
        habitList[index].count++;
        renderHabits();
        setItemHabit();
    }
    if (event.target.classList.contains('delete-button')) {
        const index = event.target.closest('li').dataset.index;
        const isConfirm = confirm("Вы точно хотите удалить привычку?");
        if (isConfirm) {    
            habitList.splice(index, 1);
            renderHabits();
            setItemHabit();
        }
    }
})

function setItemHabit() {
    localStorage.setItem('habitList', JSON.stringify(habitList));
}

function getItemHabit() {
    const savedHabits = localStorage.getItem('habitList');
    if (savedHabits) {
        habitList = JSON.parse(savedHabits); 
        renderHabits();
    }
}

getItemHabit();
