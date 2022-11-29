let pet = {
	eats: true,
};
let dog = { jumps: true };

dog.__proto__ = pet;

console.log(dog.eats);
console.log(dog.jumps);
