let lists = document.getElementsByClassName("list");
let dropContainer = document.getElementById('drop');
let dragContainer = document.getElementById('drag');
let selected = null;
const resetButton = document.getElementById('reset');
let initialDragState = [];

// Store the initial state of dragContainer
for (let list of lists) {
    initialDragState.push(list.outerHTML);
}

// Reset button click event handler
resetButton.addEventListener('click', function () {
    // Clear drop container
    dropContainer.innerHTML = '';

    // Reset drag container
    dragContainer.innerHTML = '';
    for (let i = 0; i < initialDragState.length; i++) {
        dragContainer.innerHTML += initialDragState[i];
    }

    // Re-attach event listeners to new list elements
    lists = document.getElementsByClassName("list");
    for (let list of lists) {
        list.addEventListener("dragstart", function (e) {
            selected = e.target;
        });
    }
});

for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
        selected = e.target;
    });
}

dropContainer.addEventListener("dragover", function (e) {
    e.preventDefault();
});

dropContainer.addEventListener("drop", function (e) {
    dropContainer.appendChild(selected);
    selected = null;
});
