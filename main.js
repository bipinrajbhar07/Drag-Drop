// Get all elements with the class 'list' (the draggable items)
const lists = document.getElementsByClassName("list");


// Get the left and right boxes by their IDs
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");


// Variable to hold the currently selected item during dragging
let selected = null;


// Loop through each item in 'lists' to add drag event listeners
for (let list of lists) {
    // 'dragstart' is triggered when the user starts dragging an item
    list.addEventListener("dragstart", function (e) {
        // Store the currently dragged item in the 'selected' variable
        selected = e.target;
    });
}


// Add an event listener for 'dragover' on the right box
rightBox.addEventListener("dragover", function (e) {
    // 'dragover' needs to call preventDefault() to allow dropping
    e.preventDefault();
});
//
// Add an event listener for 'drop' on the right box


rightBox.addEventListener("drop", function (e) {
    // If an item is being dragged (i.e., selected is not null)
    if (selected) {
        // Append the dragged item (selected) to the right box
        rightBox.appendChild(selected);
        // Clear the selected variable since the drop is complete
        selected = null;
    }
});




// Add an event listener for 'dragover' on the left box (to allow moving items back)
leftBox.addEventListener("dragover", function (e) {
    // Again, preventDefault to allow dropping
    e.preventDefault();
});


// Add an event listener for 'drop' on the left box
leftBox.addEventListener("drop", function (e) {
    // If an item is being dragged (i.e., selected is not null)
    if (selected) {
        // Append the dragged item (selected) back to the left box
        leftBox.appendChild(selected);
        // Clear the selected variable since the drop is complete
        selected = null;
    }
});


