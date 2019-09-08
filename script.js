var button = document.querySelector("#add");
var userinput = document.querySelector("#userinput");
var ul = document.querySelector("ul");
var deleteButton = document.querySelectorAll(".delete");


function inputLength(){
	return userinput.value.length;
}

function createDeleteButton(){
	var deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.innerText= "Delete";
	return deleteButton;
}


function createListElement(){
		var li = document.createElement("li");
		var deleteButton = createDeleteButton();
		var newListItem = document.createTextNode(userinput.value + " ");
		li.appendChild(newListItem);
		li.appendChild(deleteButton);
		ul.appendChild(li);
		userinput.value = "";
		deleteButton.addEventListener("click", function(){
			this.parentElement.remove();
			})
		console.log(li);
		li.addEventListener("click", function(){
			this.classList.toggle("done");
		})
}

function addItemAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addItemAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addItemAfterClick)

userinput.addEventListener("keypress", addItemAfterEnter)

