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

const h1 = document.getElementsByName("h1");
const body = document.getElementsByName("body");
const newItem = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const ul = document.querySelector("ul");
const listItems = document.getElementsByClassName(".list-items");


// TODO - add input verification 
// confirmation of added item?
addButton.addEventListener("click", function () {
  // Add items to list
  const li = document.createElement("li");
  li.innerText = newItem.value;
  li.classList.add("list-items");

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");

  li.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  li.appendChild(deleteButton);

  ul.append(li);
  ul.appendChild(li);

  newItem.value = "";
});

const list = document.getElementById("list");

// Remove item
list.addEventListener("click", function(event) {
  const target = event.target;

  // Check if the clicked element has the class "delete-button"
  if (target.classList.contains("delete-button")) {
    let confirmed = confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      target.parentNode.remove();
      console.log("Item deleted!"); //use alert?
    } else {
      console.log("Deletion cancelled."); //use alert?
    }    
  } else if (target.classList.contains("edit-button")) {
// Replace the item text with an input field containing the current
// text.

// Change the "Edit" button to a "Save" button.

// When "Save" is clicked, update the text with the new input value
// and revert the button back to "Edit".
  }
});
