var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li")
//each time li us used, use li[i]

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
li[0].addEventListener("click", strike);
li[1].addEventListener("click", strike1);
li[2].addEventListener("click", strike2);
li[3].addEventListener("click", strike3);
li[4].addEventListener("click", strike4);
li[5].addEventListener("click", strike5);

function strike(){
li[0].classList.toggle("done")
}
function strike1(){
	li[1].classList.toggle("done")
}

function strike2(){
	li[2].classList.toggle("done")
}

function strike3(){
li[3].classList.toggle("done")
}

function strike4(){
	li[4].classList.toggle("done")
}

function strike5(){
	li[5].classList.toggle("done")
}


function addDeleteButton(){
	var li0 = li[0].querySelector("li");
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"))
	ul.appendChild(deleteButton);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
