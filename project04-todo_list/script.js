/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 08/01/2021
# Update date: 19/08/2021
# Version: 1.1
*/

const input = document.querySelector('input');
const btn = document.querySelector('.addTask button');

//press enter key to add a task and add task button function
btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
	(e.keyCode === 13 ? addList(e) : null);
})

//add task main function
function addList(e){
	const notCompleted = document.querySelector('.notCompleted');
	const completed = document.querySelector('.completed');

	const newLi = document.createElement('li');
	const checkBtn = document.createElement('button');
	const delBtn = document.createElement('button');

	checkBtn.innerHTML = '<i class="fa fa-check"></i>';
	delBtn.innerHTML = '<i class="fa fa-trash"></i>';

	//if text field contains anything then add task to not completed list
	if(input.value !==''){
		newLi.textContent = input.value;
		input.value = '';
		notCompleted.appendChild(newLi); //create a li to not completed list
		newLi.appendChild(checkBtn); //create check button to the task
		newLi.appendChild(delBtn); //create a delete button to the task
		newLi.classList.add("show"); //add show class animation
	}

	//task check button to add to completed task list
	checkBtn.addEventListener('click', function(){
		const parent = this.parentNode;
		parent.classList.remove("show"); //remove show animation class
		parent.classList.add("hide"); //add hide animation class
		setTimeout(function() { //this is for hide animation works
			parent.remove(); //remove the task
			completed.appendChild(parent); //add the previous task to completed list when check
			checkBtn.style.display = 'none'; // remove the check button
			parent.classList.remove("hide"); //remove hide animation class
			parent.classList.add("show"); //add hide animation class
		}, 300);
	});

	//task delete button to remove the task
	delBtn.addEventListener('click', function(){
		const parent = this.parentNode;
		parent.classList.remove("show"); //remove show animation class
		parent.classList.add("hide"); //add hide animation class
		setTimeout(function() { //this is for hide animation works
			parent.remove();
		}, 300);
	});
}