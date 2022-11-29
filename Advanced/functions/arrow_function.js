hello = () => {
	document.getElementById("hello-label").innerHTML += this;
};

window.addEventListener("load", hello);
document.getElementById("btn").addEventListener("click", hello());
