//your JS code here. If required.
let input1 = document.getElementById('text');
let input2 = document.getElementById('delay');
let output = document.getElementById('output');

function getData(text, delay) {
	return new Promise((res,rej) => {
		setTimeout(() => {
			res(text);
		}, delay);
	})
}

async function display(){
	let text = input1.value;
	let delay = parseInt(input2.value);
	let data = await getData(text,delay);
	output.textContent = data;
	text = "";
	delay = "";
}
	

document.getElementById('btn').addEventListener('click', display)
