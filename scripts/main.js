//----- HOME PAGE -----

//Below creates the Vote Topic Object, its array, the mechanism to create more vote topics, populates it and a mechanism to randomly select which voting topic will appear in the headline voting area. I don't know how to use JSON yet :p .


class VoteTopic {
	constructor(name) {
		this.name = name;
		this.text = name; // name/text being the same attribute. This seems to work ok.
		this.yesVotes = yesVoteDemo();
		this.noVotes = noVoteDemo();
		this.abstainVotes = abstainVoteDemo();
	}
}

votingTopics = []; //Populating the results display.
function generateRandomNumber(max) {
	return Math.floor(Math.random() * max);
};

function yesVoteDemo() {
	value = generateRandomNumber(100000);
	return value
};
function noVoteDemo() {
	value = generateRandomNumber(10000);
	return value
};
function abstainVoteDemo() {
	value = generateRandomNumber(1000);
	return value
};


function createVoteTopic(name) {
	const input = new VoteTopic(name);
	votingTopics.push(input);
}

createVoteTopic('Do you support Election Day becoming a national holiday?');
createVoteTopic('Would you support the President being elected directly by popular vote?');
createVoteTopic('Should the world be attempting to eliminate COVID-19?');
createVoteTopic('Do you believe in climate change?');
createVoteTopic('Do you support world peace?');
createVoteTopic('Should more be done to combat climate change?');
createVoteTopic('Should all nuclear weapons be destroyed?');

document.body.onload = DefaultVotingAreaContent();

//Selects the voting area as default display. I had to split them up to allow the headlineVotingTopic function to work at two points: after a default load (it's at the bottom of the page) and on each refresh of the 'votingArea'.

function DefaultVotingAreaContent() {
	const voteAreaContent = document.getElementById('centralPanel');
	voteAreaContent.innerHTML = document.getElementById('votingAreaTab').innerHTML;


	for (i = 0; i <= votingTopics.length - 1; i++) {
		const voteAreaContent = document.getElementById('centralPanel');
		const voteTopic = document.createElement("div");
		voteTopic.id = 'Secondary_Vote_Panel';
		voteAreaContent.appendChild(voteTopic);
		voteTopic.textContent = votingTopics[i].text;

		function newVoteButton(text) {
			const voteTopicButton = document.createElement('button');
			voteTopicButton.textContent = text;
			voteTopicButton.id = 'Vote_Button';
			voteTopic.appendChild(voteTopicButton);
		}

		function newShareButton() {
			const voteTopicButton = document.createElement('button');
			voteTopicButton.textContent = 'Share';
			voteTopicButton.id = 'Share_Button';
			voteTopic.appendChild(voteTopicButton);
		}
		newVoteButton('Yes');
		newVoteButton('No');
		newVoteButton('Abstain');
		newShareButton();
	}

	/*Voting Buttons*/

	const shareButtonList = document.querySelectorAll('#Share_Button');
	shareButtonList.forEach(function (btn) {
		btn.addEventListener('click', function () {
			alert(`When the site is complete you'll be able to share links to specific voting topics; for now this is simply a place holder`)
		});
	});

	const voteButtonList = document.querySelectorAll('#Vote_Button');
	voteButtonList.forEach(function (btn) {
		btn.addEventListener('click', function () {
			alert(`Thanks for voting. When this all works properly you'd be able to cast your vote and change it as needed.`)
		});
	});
}


let headlineVotingTopic = function () {
	const selectedVotingTopic = votingTopics[generateRandomNumber(votingTopics.length)]
	const displayedVoteTopic = document.getElementById('headlineVotingTopicPoint')
	displayedVoteTopic.textContent = selectedVotingTopic.text;
}

// Powers the horizontal menu
const centralPanelMenuButtonsList = document.querySelectorAll('#CPM-btn');
const cPMNL = centralPanelMenuButtonsList // Acronym created for brevity
cPMNL.forEach(function (Button) {
	Button.addEventListener('click', function () {
		if (this === cPMNL[0]) {
			showWelcomeToDemos();
		} else if (this === cPMNL[1]) {
			showRefreshedVotingArea()
		} else if (this === cPMNL[2]) {
			showVoteDrafting()
		} else if (this === cPMNL[3]) {
			showBrowseResults()

		};
	});
});

function showWelcomeToDemos() {//Selects the welcome message to be displayed
	const div = document.getElementById('centralPanel');
	div.innerHTML = document.getElementById('welcomeToDemosTab').innerHTML;
}

//Selects the voting area to be displayed
function showRefreshedVotingArea() {
	DefaultVotingAreaContent();
	headlineVotingTopic();

}

//'Selects the vote drafting section to be displayed

function showVoteDrafting() {
	const div = document.getElementById('centralPanel');
	div.innerHTML = document.getElementById('draftAVoteTopicTab').innerHTML;

	const draftVoteTopicInput = document.getElementById('draftVoteTopicInput');
	const draftVoteTopicMessage = document.getElementById('draftVoteTopicPara');
	const draftVoteTopicButton = document.getElementById('draftVoteTopicButton');

	draftVoteTopicButton.onclick = function (e) {
		if (draftVoteTopicInput.value === '') {
			e.preventDefault();
			draftVoteTopicMessage.textContent = 'You need to enter the voting topic text.';
		} else {
			draftVoteTopicMessage.textContent = `Thankyou!
		
		Your vote has been added to this session's voting topics (no local or remote storage currently!).
		
		In a future version your input would be checked prior to publication through a collaborative editing process, similar to Wikipedia and GitHub.`;
			createVoteTopic(draftVoteTopicInput.value);
		}
	}
}

//BROWSE RESULTS SECTION

function showBrowseResults() {
	const div = document.getElementById('centralPanel');
	div.innerHTML = document.getElementById('browseResultsTab').innerHTML;


	for (i = 0; i <= votingTopics.length - 1; i++) {

		const VoteTopicText = document.createElement("p");
		VoteTopicText.id = 'Display_Results_Panel_1st'
		div.appendChild(VoteTopicText);
		VoteTopicText.textContent = `${votingTopics[i].text}`

		const VoteTopicResults = document.createElement("p");
		VoteTopicResults.id = 'Display_Results_Panel_2nd'
		div.appendChild(VoteTopicResults);
		VoteTopicResults.textContent = `Yes Votes: ${votingTopics[i].yesVotes}. No Votes: ${votingTopics[i].noVotes}. Abstentions: ${votingTopics[i].abstainVotes}.`
	};
}

headlineVotingTopic();