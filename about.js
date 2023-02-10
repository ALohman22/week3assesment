console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('form submited!');
}

let compliment = evt =>{
	evt.preventDefault();
	alert('Good Job!')
}


let form = document.querySelector('#contact');
let img = document.querySelector('img');


form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', compliment)