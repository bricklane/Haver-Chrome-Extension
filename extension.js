//first, second and thirdTask are the values of the tasks as they are input.
//taskOne, Two and Three are the IDs of the containers as they are displayed on the page.

let firstTask;
let secondTask;
let thirdTask;

firstTask = "";
secondTask = "";
thirdTask = "";

var taskOne = document.getElementById("taskOne");
var taskTwo = document.getElementById("taskTwo");
var taskThree = document.getElementById("taskThree");


//hit enter key and it adds the value to the variable, *checks to see if there are less than 3, *creates a duplicate, *moves selected input to the next one 

document.getElementById("taskInput").addEventListener('keyup', event => {
	if (event.keyCode === 13) {

		firstTask = (event.currentTarget.value);
		console.log(firstTask);
		console.log(secondTask.length + firstTask.length);
		document.getElementById("taskTwoinput").focus();
		getLength();
		var taskOnevalue = document.createTextNode(firstTask);
		taskOnep.prepend(taskOnevalue)
		var firstTaskinput = document.getElementById("taskInput");
		firstTaskinput.classList.add("taskinactive");
	}
})

document.getElementById("taskTwoinput").addEventListener('keyup', event => {
	if (event.keyCode === 13) {

		secondTask = (event.currentTarget.value);
		console.log(secondTask);
		console.log(secondTask.length + firstTask.length);
		document.getElementById("taskThreeinput").focus();
		getLength();
		var taskTwovalue = document.createTextNode(secondTask);
		taskTwo.prepend(taskTwovalue)
		var secondTaskinput = document.getElementById("taskTwoinput");
		secondTaskinput.classList.add("taskinactive");


	}
})

document.getElementById("taskThreeinput").addEventListener('keyup', event => {
	if (event.keyCode === 13) {

		thirdTask = (event.currentTarget.value);
		console.log(thirdTask);
		console.log(thirdTask.length + secondTask.length + firstTask.length);
		document.getElementById("taskThreeinput").blur();
		getLength();
		var taskThreevalue = document.createTextNode(thirdTask);
		taskThree.prepend(taskThreevalue)
		var thirdTaskinput = document.getElementById("taskThreeinput");
		thirdTaskinput.classList.add("taskinactive");

	}
})


//function to duplicate 

// checks to see if there is a visible task, hides the task button if there are already visible tasks

function getLength() {
	if (firstTask.length > 1) {
	var elem = document.getElementById("taskToggle");
	elem.classList.add("taskinactive");
}
	else {
	var elem = document.getElementById("taskToggle");
	elem.classList.remove("taskinactive");
	}
	}

function taskToggle() {
	var elem = document.getElementById("taskList");
	elem.classList.toggle("taskinactive");
}

function taskOnecomplete(){
	firstTask = "";
	var clearFirsttask = document.getElementById("taskOne")
	$("ol").append($("#taskOne").detach());
	var clearFirsttask = document.getElementById("taskOnep")
	clearFirsttask.remove();
	console.log(firstTask);

}

function taskTwocomplete(){
	secondTask = 0;
}

function taskThreecomplete(){
	thirdTask = 0;
}
















//first, second and thirdTask are the values of the tasks as they are input.
//taskOne, Two and Three are the IDs of the containers as they are displayed on the page.

//let firstTask;
//let secondTask;
//let thirdTask;

//firstTask = "Robot";
//secondTask = "Whistle";
//thirdTask = "Bicycle";