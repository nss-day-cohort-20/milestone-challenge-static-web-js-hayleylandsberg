// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************



//List variables for id's in DOM
var heightInput = document.getElementById("height");	
var characterInput = document.getElementById("character");
var button = document.getElementById("btn");
var output = document.getElementById("showTree");


//Add event listener to button
button.addEventListener("click", growTree);


// //Functions to get height and character
// function getHeight() {
// 	var height = heightInput.value;
// 		return height;
// };

// function getCharacter() {	
// 	var character = characterInput.value;
// 		return character;
// };


//Function to grow tree
function growTree(event){
	console.log("hello");
	console.log(characterInput.value);
	console.log(heightInput.value);
	if (characterInput.value !== "" && heightInput.value !== ""){
		for(i = 0; i < heightInput.value; i++) {

//TODO: Figure out how to run a loop to different lines in the console... /n?
		}
	} else {
		alert("Please enter values for both character and height fields.");
	}
};


//Enter key to work when curser is in character field.

character.addEventListener("keypress", function(event) {
	console.log(event);
	if (event.which === 13) {
		event.preventDefault();
		console.log("enter press");
		growTree();
	}
});
