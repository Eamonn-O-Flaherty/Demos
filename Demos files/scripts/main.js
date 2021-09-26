/*Voting Buttons*/

/* Some alternate key sections to get the buttons to work:

const voteButtonList = document.querySelectorAll('#voteButton');
function registerVote (){
return voteButtonList[0].textContent}
voteButtonList.addEventListener('click',registerVote);

function(e).......... alert(......+ e.target.textContent)

*/

const voteButtonList = document.querySelectorAll('#voteButton');
voteButtonList.forEach(function(voteButton) {
	 voteButton.addEventListener('click', function() {
		 alert('You selected: ' + this.textContent);
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

	for(let i = 0; i < objPeople.length; i++) {
		if(username === objPeople[i].username && password === objPeople[i].password) {
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
	for(let i = 0; i < objPeople.length; i++) {
		if(registerUsername === objPeople[i].username) {
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

submitVoteTopicForm.onsubmit = function(e) {
  if (voteTopicText.value === '') {
    e.preventDefault();
    voteTopicInfoPara.textContent = 'You need to enter the voting topic text.';
  }
}