//first, second and thirdTask are the values of the tasks as they are input.
//taskOne, Two and Three are the IDs of the containers as they are displayed on the page.

let firstTask;
let secondTask;
let thirdTask;

let currentTasks;
currentTasks = "";

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

		//console.log(firstTask);
		//console.log(secondTask.length + firstTask.length);
		document.getElementById("taskTwoinput").focus();
		getLength();
		currentTasks ++;
		console.log(currentTasks);
		var taskOnevalue = document.createTextNode(firstTask);
		taskOnep.prepend(taskOnevalue)
		var firstTaskinput = document.getElementById("taskInput");
		firstTaskinput.classList.add("taskinactive");
		displayCount();
	}
})

document.getElementById("taskTwoinput").addEventListener('keyup', event => {
	if (event.keyCode === 13) {

		secondTask = (event.currentTarget.value);
		currentTasks ++;
		console.log(currentTasks);
		//console.log(secondTask);
		//console.log(secondTask.length + firstTask.length);
		document.getElementById("taskThreeinput").focus();
		getLength();
		var taskTwovalue = document.createTextNode(secondTask);
		taskTwop.prepend(taskTwovalue)
		var secondTaskinput = document.getElementById("taskTwoinput");
		secondTaskinput.classList.add("taskinactive");
		displayCount();
	}
})

document.getElementById("taskThreeinput").addEventListener('keyup', event => {
	if (event.keyCode === 13) {

		thirdTask = (event.currentTarget.value);
		currentTasks ++;
		console.log(currentTasks);
		//console.log(thirdTask);
		//console.log(thirdTask.length + secondTask.length + firstTask.length);
		document.getElementById("taskThreeinput").blur();
		getLength();
		var taskThreevalue = document.createTextNode(thirdTask);
		taskThreep.prepend(taskThreevalue)
		var thirdTaskinput = document.getElementById("taskThreeinput");
		thirdTaskinput.classList.add("taskinactive");
		displayCount();
	}
})


//function to duplicate 

// checks to see if there is a visible task, hides the task button if there are already visible tasks

function getLength() {
	if (firstTask.length > 0) {
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
	clearFirsttask.innerHTML = "";

	var firstTaskinput = document.getElementById("taskInput");
	firstTaskinput.classList.remove("taskinactive");
	firstTaskinput.value = "";
	currentTasks = currentTasks - 1;
	console.log(currentTasks);
	displayCount();
	//console.log(firstTask.length);

}

function taskTwocomplete(){
	secondTask = "";
	var clearSecondtask = document.getElementById("taskTwo")
	$("ol").append($("#taskTwo").detach());
	var clearSecondtask = document.getElementById("taskTwop")
	clearSecondtask.innerHTML = "";

	var secondTaskinput = document.getElementById("taskTwoinput");
	secondTaskinput.classList.remove("taskinactive");
	secondTaskinput.value = "";
	currentTasks = currentTasks - 1;
	console.log(currentTasks);
	displayCount();
	//console.log(secondTask.length);
}

function taskThreecomplete(){
	thirdTask = "";
	var clearThirdtask = document.getElementById("taskThree")
	$("ol").append($("#taskThree").detach());
	var clearThirdtask = document.getElementById("taskThreep")
	clearThirdtask.innerHTML = "";

	var thirdTaskinput = document.getElementById("taskThreeinput");
	thirdTaskinput.classList.remove("taskinactive");
	thirdTaskinput.value = "";
	currentTasks = currentTasks - 1;
	console.log(currentTasks);
	displayCount();
	//console.log(thirdTask.length);
}

function displayCount () {
	if (currentTasks === 1) {
		//$('.tasks li:gt(1)').hide();
		console.log("one task");
	}
	if (currentTasks === 2) {
		//$('.tasks li:gt(1)').hide();
		console.log("two tasks");
	}
	if (currentTasks === 3) {
		//$('.tasks li:gt(1)').hide();
		console.log("three tasks");
	}
	if (currentTasks === 0) {
		//$('.tasks li:gt(1)').hide();
		console.log("no tasks");
	}
}















//first, second and thirdTask are the values of the tasks as they are input.
//taskOne, Two and Three are the IDs of the containers as they are displayed on the page.

//let firstTask;
//let secondTask;
//let thirdTask;

//firstTask = "Robot";
//secondTask = "Whistle";
//thirdTask = "Bicycle";