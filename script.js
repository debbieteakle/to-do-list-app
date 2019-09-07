var button = document.querySelector("#add");
var userinput = document.querySelector("#userinput");
var ul = document.querySelector("ul");


function inputLength(){
	return userinput.value.length;
}

function createListElement(){
		var li = document.createElement("li");
		var deleteButton = document.createElement("button");
		deleteButton.innerText= "Delete";
		var newListItem = document.createTextNode(userinput.value + " ");
		li.appendChild(newListItem);
		li.appendChild(deleteButton);
		ul.appendChild(li);
		userinput.value = "";
}

function addItemAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addItemAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}// body...
}

button.addEventListener("click", addItemAfterClick)

userinput.addEventListener("keypress", addItemAfterEnter)

