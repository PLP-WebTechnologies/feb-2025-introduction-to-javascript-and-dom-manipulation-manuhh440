// Function to change the text content of an element
function changeText() {
    const textElement = document.getElementById('dynamicText');
    if (textElement) {
        textElement.textContent = 'The text has been dynamically changed!';
    }
}

// Function to change the CSS styles of an element
function changeStyle() {
    const styleElement = document.getElementById('styleMe');
    if (styleElement) {
        styleElement.style.backgroundColor = 'lightgreen';
        styleElement.style.color = 'darkgreen';
        styleElement.style.fontWeight = 'bold';
    }
}

// Function to add a new item to the list
function addItem() {
    const listContainer = document.getElementById('itemContainer');
    if (listContainer) {
        const newItem = document.createElement('li');
        newItem.textContent = `New Item ${listContainer.children.length + 1}`;
        listContainer.appendChild(newItem);
    }
}

// Function to remove the last item from the list
function removeItem() {
    const listContainer = document.getElementById('itemContainer');
    if (listContainer && listContainer.children.length > 0) {
        listContainer.removeChild(listContainer.lastElementChild);
    }
}

// Event listeners to trigger the functions on button clicks
document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('changeTextButton');
    const changeStyleButton = document.getElementById('changeStyleButton');
    const addItemButton = document.getElementById('addItemButton');
    const removeItemButton = document.getElementById('removeItemButton');

    if (changeTextButton) {
        changeTextButton.addEventListener('click', changeText);
    }

    if (changeStyleButton) {
        changeStyleButton.addEventListener('click', changeStyle);
    }

    if (addItemButton) {
        addItemButton.addEventListener('click', addItem);
    }

    if (removeItemButton) {
        removeItemButton.addEventListener('click', removeItem);
    }
});