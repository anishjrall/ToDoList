function keydown(event) {
    if (event.key === "Enter") {
        inputdata();
    }
}

const todo = [
    { name: "Study", date: "2025-01-05" },
    { name: "Will Go For Trip", date: "2025-02-23" }
];

console.log(todo);
printdata();

function printdata() {
    let out = "";
    for (let i = todo.length - 1; i >= 0; i--) {
        const { name, date } = todo[i];
        let elem = `
        <div class="name">${name}</div>
        <div class="date">${date}</div>
        <div>
            <button class="button" onclick="removeItem(${i})">Delete</button>
        </div>
        `;
        out += elem;
    }
    const container = document.querySelector('.div');
    if (container) {
        container.innerHTML = out;
    }
}

function removeItem(index) {
    todo.splice(index, 1);
    printdata();
}

function inputdata() {
    const nameInput = document.querySelector('input.todo');
    const dateInput = document.querySelector('.date');
    const name = nameInput.value.trim();
    const date = dateInput.value;

    if (name) {
        if (date) {
            todo.push({ name, date });
        } else {
            const newDate = new Date().toISOString().split('T')[0];
            todo.push({ name, date: newDate });
        }
        printdata();
        nameInput.value = '';
        dateInput.value = '';
    }
}
