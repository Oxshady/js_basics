let butn = document.getElementById('btn');
let myDiv = document.getElementById('div1');
let myImg = document.getElementById('img1');
let imgSrc = [];

imgSrc[0] = 'images/s1.jpeg';
imgSrc[1] = 'images/s2.jpeg';
imgSrc[2] = 'images/s3.jpeg';
imgSrc[3] = 'images/s4.jpeg';
imgSrc[4] = 'images/s5.jpeg';
let myPage = document.body;
let headr = document.getElementById('heade');
function changeBg(e)
{
	myPage.style = `background-color:rgb(${e.offsetY},100,110)`;
	headr.style =  `background-color:rgb(${e.offsetY},100,110)`;
}
let counter = 0;
function setimg()
{
	myImg.src = imgSrc[counter]
	counter++
	counter = (counter == 4)?0:counter;
}
setInterval(setimg,1200)
myPage.onmousemove = changeBg;
function showDay(){
	let toDay = new Date().getDay();
	switch(toDay){
		case 0 :alert("today is sunday");
				break;
		case 1 :alert("today is monday");
				break;
		case 2 :alert("today is tuesday");
				break;
		case 3 :alert("today is wedensday");
				break;
		case 4 :alert("today is thursday");
				break;
		case 5 :alert("today is friday");
				break;
		default:alert("today is suturday");
				break;
	}
}
butn.onclick = showDay;
let firstNumber = document.getElementById('FirstNum');
let operator = document.getElementById('operators');
let secondNumber = document.getElementById('SecondNumber');
let Result = document.getElementById('results');
let buutn = document.getElementById('calc');
function calculator(event){
	event.preventDefault();
	switch(operator.value)
	{
		case '+':
			Result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);
			break;
		case '-':
			Result.innerHTML = parseInt(firstNumber.value) - parseInt(secondNumber.value);
			break;
		case '%':
			Result.innerHTML = parseInt(firstNumber.value) % parseInt(secondNumber.value);
			break;
		case '*':
			Result.innerHTML = parseInt(firstNumber.value) * parseInt(secondNumber.value);
			break;
		case '/':
			Result.innerHTML = parseInt(firstNumber.value) / parseInt(secondNumber.value);
			break;
		default:
			break;
	}
}
buutn.onclick = calculator;