let user = {
	firstName: "John",
};
function func() {
	console.log(this.firstName);
}

let funcUser = func.bind(user);

funcUser();
