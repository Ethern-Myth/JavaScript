try {
	console.log("Begin try runs");
	console.log("End try runs");
} catch (err) {
	console.log("Catch is ignored, there are no errors");
} finally {
	console.log("Finally, this block will be invoked automatically");
}
