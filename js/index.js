
let today = new Date();
let thisYear = today.getFullYear();

/*
const footer = document.querySelector('footer');
//footer.innerHTML = thisYear;
const copyright = document.createElement('p');
//copyright.innerHTML  = "&copy; Lawrence " + thisYear + "<br />" + "<a href='#top'>Top</a>";
copyright.innerHTML  = "<a href='#top'>^Top^</a>";
footer.appendChild(copyright);
*/

let skills = ["Javascript", "HTML", "CSS", "Java", "Python", "C", "Git", "Ruby", "Rails"];
const skillsSection = document.querySelector('#skills');

let skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
	let li = document.createElement('li');
	li.innerHTML = skills[i];
	skillsList.appendChild(li);
}


let messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", (e) => {
	
	
	//can't use the function declaration way!
	//MUST use arrow syntax.
	
	e.preventDefault();
	


	
	let name = "myName";
	let email = "myEmail";
	let message = "myMessage";

	
	name = e.target.name.value;
	email = e.target.email.value;
	message = e.target.message.value;

	
	console.log(`name: ${name}, email: ${email}, message: ${message}`);
	//console.log(`event: ${event}`);

	//let messageSection = document.getElementById("messages");
	let messageSection = document.querySelector('#messages')
	let messageList = messageSection.querySelector('ul');
	
	let newMessage = document.createElement('li');
	newMessage.innerHTML = `<a href=mailto:${email}>${name}</a> wrote: <span>${message} </span>`;
	
	let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.className = "remove";
	
	removeButton.addEventListener("click", (e) => {
		let li  = e.target.parentNode;
		let ul = li.parentNode;
		li.remove();
	});
	
	newMessage.appendChild(removeButton);
	messageList.appendChild(newMessage);

	
	
	
	
	messageForm.reset();



});


//Lesson 6.1 AJAX Basics
//deleted the XMLHttpRequest code so it doesn't interfere with Lesson 6.2 Fetch API

//Lesson 6.2 Fetch API
fetch('https://api.github.com/users/LawrenceELee/repos')
	.then(response => response.json())
//    .then(data => console.log(data));
	.then( (data) => displayGithubData(data))
	.catch( (error) => {
		console.log(error);
	});

function displayGithubData( repositories ){

	let projectSection = document.querySelector('#projects');
	let projectList = projectSection.querySelector('ul');
	
	for(let i=0; i < repositories.length; i++){
		
		let project = document.createElement('li');
		project.innerHTML = repositories[i].name;
		projectList.appendChild(project);
		
		//stretch goal #1
		
		//create links to the repos
		let aTag = document.createElement('a');
		let projLink = document.createTextNode(repositories[i].name + '');
		
		//append text node to anchor element
		aTag.appendChild(projLink);
		
		//set the title
		aTag.title = "" + i;
		
		//set href property to html_url
		aTag.href = repositories[i].html_url;
		
		//append anchor elmt to list
		projectList.appendChild(aTag);
		
		
		
		//some spacing between list items
		let pTag = document.createElement('p');
		projectList.appendChild(pTag);
				
	}
}

function hideEmail(){
  let parts = ["function", "example", "com", "&#46;", "&#64;"];
  let email = parts[0] + parts[4] + parts[1] + parts[3] + parts[2];
  document.querySelector('#connect').querySelector('#connect-email').innerHTML = "Email: " + email;
  
  //document.querySelector('footer').querySelector('#footer-email').innerHTML = email;
}
hideEmail();


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleHamburger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

