/*
Instructions
Create a dynamic shopping list application that uses DOM manipulation and event handling to add, edit, and remove items from the list. You will practice:
● Selecting DOM elements using document.getElementById() and
document.querySelector().
● Dynamically updating the DOM by adding, modifying, and removing
elements.
● Caching DOM elements for efficient code.
Tasks
1. HTML Setup:
Create a basic HTML structure with:
● An input field for entering new items.
● A button to add items to the list.
● An unordered list to display the shopping list items.
2. Core Features:
● Add Items:
○ When the user enters text in the input field and clicks the "Add"
button, a new list item is added to the.
○ Each list item should include:
■ The item text.
■ A "Remove" button to delete the item.
■ A "Edit" button to modify the item text.
● Remove Items:
○ When the "Remove" button is clicked, the corresponding list item is
deleted from the.
● Edit Items:
○ When the "Edit" button is clicked:
■ Replace the item text with an input field containing the current
text.
■ Change the "Edit" button to a "Save" button.
■ When "Save" is clicked, update the text with the new input value
and revert the button back to "Edit".
*/

const newItem = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const addItemContainer = document.getElementById("add-item-container");
const listContainer = document.getElementById("list-container");

// Event listener to add items to list
addButton.addEventListener("click", function () {
  let item = document.createElement("div");
  item.classList.add("item");

  let li = document.createElement("li");
  li.innerText = `${newItem.value}`;
  li.classList.add("list-item");
  item.appendChild(li);

  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  // editButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  editButton.classList.add("edit-button");
  item.appendChild(editButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("delete-button");
  item.appendChild(deleteButton);

  // Check if input is empty
  if (newItem.value === "") {
    alert("Please enter an item");
  } else {
    listContainer.appendChild(item);
  }
  // Reset input box
  newItem.value = "";

  editButton.addEventListener("click", function () {
    if(editButton.classList.contains('edit-button')) {
      editButton.classList.remove('edit-button');
      editButton.classList.add('save-button');
      editButton.textContent = "Save";
      // editButton.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
      let editItem = document.createElement("input");
      editItem.type = "text";
      editItem.id = "edit-item";
      editItem.value = li.textContent;
      this.parentElement.replaceChild(editItem, li);

    } else {
      editButton.classList.remove('save-button');
      editButton.classList.add('edit-button');
      editButton.textContent = "Edit";
      editedItem = document.getElementById("edit-item");
      li = document.createElement("li");
      li.innerText = editedItem.value;
      this.parentElement.replaceChild(li, editedItem);
    };
  });

  // Remove item
  deleteButton.addEventListener("click", function (event) {
    let target = event.target;
    let confirmed = confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      target.parentElement.parentElement.remove();
      console.log("Item deleted!"); //use alert?
    } else {
      console.log("Deletion cancelled."); //use alert?
    }
  });
});