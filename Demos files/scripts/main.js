/*Voting Buttons*/

/* Some alternate key sections to get the buttons to work:

const voteButtonList = document.querySelectorAll('#voteButton');
function registerVote (){
return voteButtonList[0].textContent}
voteButtonList.addEventListener('click',registerVote);

function(e).......... alert(......+ e.target.textContent)

*/

document.body.onload = showVotingArea();
/* document.body.onload = showWelcomeToDemos(); */

function showVotingArea() {
	const div = document.createElement('div');
	div.setAttribute('class', 'votingArea');
	div.innerHTML = document.getElementById('votingArea').innerHTML;
	document.getElementById('centralPanelDisplayPoint').appendChild(div);

	const voteButtonList = document.querySelectorAll('#voteButton');
	voteButtonList.forEach(function (voteButton) {
		voteButton.addEventListener('click', function () {
			alert('You selected: ' + this.textContent);
		});
	});
}

function showWelcomeToDemos() {
	const div = document.createElement('div');
	div.setAttribute('class', 'welcomeToDemos');
	div.innerHTML = document.getElementById('welcomeToDemos').innerHTML;
	document.getElementById('centralPanelDisplayPoint').appendChild(div);
}

/* CENTRAL PANEL MENU */

const centralPanelMenuButtonsList = document.querySelectorAll('#CPM-btn');
const centralPanelDisplayArea = document.getElementById('centralPanelDisplayArea');


centralPanelMenuButtonsList.forEach(function (voteButton) {
	voteButton.addEventListener('click', function () {
		showWelcomeToDemos();
	})
});

/*Login Form*/

const objPeople = [
	{
		username: "sam",
		password: "codify"
	},
	{
		username: "matt",
		password: "academy"
	},
	{
		username: "chris",
		password: "forever"
	}

]

function login() {
	const username = document.getElementById('username').value
	const password = document.getElementById('password').value

	for (let i = 0; i < objPeople.length; i++) {
		if (username === objPeople[i].username && password === objPeople[i].password) {
			console.log(username + " is logged in!!!");
			return;
		}
	}
	console.log("incorrect username or password")
}


function registerUser() {
	const registerUsername = document.getElementById('newUsername').value
	const registerPassword = document.getElementById('newPassword').value
	const newUser = {
		username: registerUsername,
		password: registerPassword
	}
	for (let i = 0; i < objPeople.length; i++) {
		if (registerUsername === objPeople[i].username) {
			alert('That username is already in use, please choose another.');
			return
		} else if (registerPassword.length < 8) {
			alert('That is to short, include 8 or more characters.');
			return
		}
	}
	objPeople.push(newUser)
	console.log(objPeople)
}

/* VOTE CRAFTING */

const submitVoteTopicForm = document.getElementById('submitVoteTopicForm');
const voteTopicText = document.getElementById('voteTopicText');
const voteTopicInfoPara = document.getElementById('submitVoteTopicPara');

submitVoteTopicForm.onclick = function (e) {
	if (voteTopicText.value === '') {
		e.preventDefault();
		voteTopicInfoPara.textContent = 'You need to enter the voting topic text.';
	} else { voteTopicInfoPara.textContent = 'Thankyou! Your vote topic will be reviewed and published shortly.'; }
}



/*document.body.onload = changePanelDisplay;

function changePanelDisplay() {
	// create a new div element
	const newDiv = document.createElement("div");

	// and give it some content
	const newContent = document.createTextNode("Hi there and greetings!");

	// add the text node to the newly created div
	newDiv.appendChild(newContent);

	// add the newly created element and its content into the DOM
	const currentDiv = document.getElementById("div1");
	document.body.insertBefore(newDiv, currentDiv);
}

/* CENTRAL PANEL DISPLAY*/

/*WELCOME TO DEMOS */

/*const firstParagraph = document.createElement('p');
const welcomeToDemosText = document.createTextNode()

function addWelcomeToDemosContent() {

	const createPara = document.createElement('p');
	const addText = function() {
		const input = 5
		document.createTextNode(input)
	}
	const addUnorderedList = document.createElement('ul');
	const addListItem = documen.createElement('li')

	createPara.appendChild(addText(

	`Our Democracy is good, but it could be better.

	As part of the Better Democracy campaign
	Demos will allow us to vote on topics of
	our choosing -
	in as much detail as we want - so as to inform
	ourselves, each other
	and our elected representatives as to our view
	on things

	It is to be used alongside our current system, and is
	a better way of:`))

	const currentDiv = document.getElementById('centralPanelMenu');
	document.body.insertBefore(createPara, currentDiv);

}
document.body.onload = addWelcomeToDemosContent; */

/*document.body.onload = changePanelDisplay;

function changePanelDisplay() {
	const newDiv = document.createElement(`dividvotingArea`);
	const newContent = document.createTextNode("Test this!");
	newDiv.appendChild(newContent);
	const currentDiv = document.getElementById("centralPanelDisplayAnchor");
	document.body.insertBefore(newDiv, currentDiv);
} */

