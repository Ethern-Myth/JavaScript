//setTimeout
function sayHi() {
	console.log("Hello");
}

setTimeout(sayHi, 1000);

//setInterval

let timerId = setInterval(() => console.log("tick"), 2000);
setTimeout(() => {
	clearInterval(timerId);
	console.log("stop");
}, 2000);
